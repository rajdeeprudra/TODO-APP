const express = require("express");
const { createTodoSchema, completedTodoSchema } = require("./types");
const { todo } = require("./db");

const app = express();
app.use(express.json());

app.post("/todo", async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodoSchema.safeParse(req.body);

    if (!parsedPayload.success) {
        return res.status(411).json({
            msg: "You sent the wrong inputs"
        });
    }

    await todo.create({
        title: parsedPayload.data.title,
        description: parsedPayload.data.description,
        completed: false
    });

    res.json({
        msg: "Todo created"
    });
});

app.get("/todos", async (req, res) => {
    const todos = await todo.find({});
    res.json({ todos });
});

app.put("/completed", async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = completedTodoSchema.safeParse(req.body);

    if (!parsedPayload.success) {
        return res.status(411).json({
            msg: "You sent the wrong inputs"
        });
    }

    await todo.updateOne(
        { _id: req.body.id },
        { completed: true }
    );

    res.json({
        msg: "Todo marked as completed"
    });
});

app.listen(5000, () => {
    console.log("Server listening at port 5000");
});

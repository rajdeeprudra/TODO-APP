const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();
app.use(express.json());

app.post("/todo", (req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success) {
        return res.status(411).json({
            msg: "you sent the wrong inputs",
        })
        return;
    }

})

app.get("/todos", (req,res)=>{
    
})

app.put("/completed", (req,res)=>{
    
    const updatePayload= req.body;
    const paredPayload = updateTodo.safeParse(updatePayload);
    if(!paredPayload.success) {
        return resizeBy.status(411).json({
            msg: " you sent the qring inputs",
        })
        return;
    }


})

app.listen(3000);
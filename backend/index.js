const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();
app.use(express.json());

app.post("/todo", async(req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
   try {if(!parsedPayload.success) {
        return res.status(411).json({
            msg: "you sent the wrong inputs",
        })
        return;
    }} 
    catch(err){

    }
   await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed: false

    })

    res.json({
        msg: "todo created"
    })

})

app.get("/todos", async(req,res)=>{
    const todos = await todo.find({}); //promise

    res.json({
        todos
    })
})

app.put("/completed", async (req,res)=>{
    
    const updatePayload= req.body;
    const paredPayload = updateTodo.safeParse(updatePayload);
    if(!paredPayload.success) {
        return resizeBy.status(411).json({
            msg: " you sent the wrong inputs",
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "todo marked as completed"
    })

})

app.listen(5000);
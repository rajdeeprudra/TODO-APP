const zod= require("zod");

const createTodoSchema = zod.object({
    title: string(),
    description: zod.string()
})

const completedTodoSchema = zod.object({
    id:string(),
});

module.exports = {
    createTodo: createTodo,
    updateTodo : updateTodo
}

/*
    
    {
        title: string,
        description: string,
    }


    {
        id: string,
    }
*/
const zod= require("zod");

const createTodoSchema = zod.object({
    title: zod.string(),
    description: zod.string()
})

const completedTodoSchema = zod.object({
    id: zod.string(),
});

module.exports = {
    createTodoSchema,
    completedTodoSchema
};

/*
    
    {
        title: string,
        description: string,
    }


    {
        id: string,
    }
*/
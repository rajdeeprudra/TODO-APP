const mongoose = require("mongoose");
mongoose.connect("//mongodb+srv://rajdeeprudra2003:03UO1bWnfoihLnfS@cluster1.rohap8k.mongodb.net/");
const todoSchema =mongoose.Schema({
    Title: string,
    description: string,
    Completed : boolean

})

const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
}
//mongodb+srv://rajdeeprudra2003:03UO1bWnfoihLnfS@cluster1.rohap8k.mongodb.net/
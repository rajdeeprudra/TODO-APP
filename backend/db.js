const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://rajdeeprudra2003:03UO1bWnfoihLnfS@cluster1.rohap8k.mongodb.net/");
const todoSchema =mongoose.Schema({
    title: String,
    description: String,
    completed : Boolean

})

const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
}
//mongodb+srv://rajdeeprudra2003:03UO1bWnfoihLnfS@cluster1.rohap8k.mongodb.net/
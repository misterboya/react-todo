const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://boyamister:s3nSSQfFnCgTtBur@cluster0.bzol0u3.mongodb.net/todoapp?retryWrites=true&w=majority&appName=Cluster0");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("todoapp", todoSchema);

module.exports = {
    todo
}
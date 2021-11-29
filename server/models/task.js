const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
    title: String,
    content: String,
    date: { type: Date, default: new Date() }
});
const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
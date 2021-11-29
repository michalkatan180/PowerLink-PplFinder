const Task = require("../models/task");
const mongoose = require("mongoose");

const deleteTask = async (req, res) => {
    let { _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send("Invalid ID number");
    let t = await Task.findByIdAndRemove(_id);
    if (!t) return res.status(404).send("There is no task with such an ID number");
    console.log(t);
    return res.send(t);
}

const addTask = async (req, res) => {
    let t = req.body;
    let newT = new Task(t);
    try {
        await newT.save();
        return res.send(newT);
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
}

const getAll = async (req, res) => {
    let tasks = await Task.find();
    return res.send(tasks);
}

module.exports = {
    addTask, deleteTask,getAll
}
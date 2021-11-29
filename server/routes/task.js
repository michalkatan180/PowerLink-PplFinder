const express = require("express");
const route = express.Router();
const taskController = require("../controllers/task");

route.post("/addTask", taskController.addTask)
route.get("/", taskController.getAll)
route.delete("/:_id",taskController.deleteTask)

module.exports = route;
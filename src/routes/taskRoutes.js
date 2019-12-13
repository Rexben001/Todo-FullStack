const express = require("express");
const tasksController = require("../controllers/tasks");

const tasksRouter = new express.Router();

tasksRouter.get("/api/v1/tasks", tasksController.getAllTasks);
tasksRouter.get("/api/v1/tasksby/:id", tasksController.getTaskById)
tasksRouter.get("/api/v1/tasks/:id", tasksController.userByTasks);
tasksRouter.post("/api/v1/tasks/:id", tasksController.createTask);

module.exports = tasksRouter;

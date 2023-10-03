const Task = require("../models/task");

const getallTasks = async (req, res) => {
  try {
    const tasks = await Task.find({})
  res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({msg:error.errors.name.message})
  }
};
const getTask = (req, res) => {
  res.json({ id: req.params.id });
};
const createTasks = async (req, res) => {
  try {
    const task = await Task.create(req.body);
  res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({msg:error.errors.name.message})
  }
};
const updateTasks = (req, res) => {
  res.send("update task");
};
const deleteTasks = (req, res) => {
  res.send("delete a task");
};

module.exports = {
  getallTasks,
  getTask,
  createTasks,
  updateTasks,
  deleteTasks,
};

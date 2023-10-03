const Task = require("../models/task");


//Get all the tasks
const getallTasks = async (req, res) => {
  try {
    const tasks = await Task.find({})
  res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({msg:error.errors.name.message})
  }
};
//Get a task
const getTask = async(req, res) => {
 try {
  const {id:taskID} = req.params
  const task = await Task.findOne({_id:taskID})
 if(!task){
  return  res.status(404).json({msg : `No task with id ${taskID}`})
 }
 res.status(200).json({task})
 } catch (error) {
  res.status(500).json({msg:error.errors.name.message})
 }
};
//create Task
const createTasks = async (req, res) => {
  try {
    const task = await Task.create(req.body);
  res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({msg:error.errors.name.message})
  }
};

//Update the task
const updateTasks = async(req, res) => {
  try {
    const {id:taskID} =req.params
    
    const task = await Task.findOneAndUpdate({_id:taskID} ,req.body,{
      new:true,
      runValidators:true,
    })
    if(!task){
      res.status(404).json({msg:`No item with the id ${taskID}`})
    }
    res.status(200).json({task})
  } catch (error) {
    res.status(500).json({msg:error.errors.name.message})
  }
};

//Delete a  task
const deleteTasks = async(req, res) => {
  try {
    const {id:taskID} = req.params
    const task = await Task.findOneAndDelete({_id:taskID})
    if(!task){
      return res.status(404).json({msg:`No task is found for the id${taskID}`})
    }
    res.status(200).json({task})
  } catch (error) {
    res.status(500).json({msg:error.errors.name.message})
  }
};

module.exports = {
  getallTasks,
  getTask,
  createTasks,
  updateTasks,
  deleteTasks,
};

const getallTasks = (req, res) => {
  res.send("all items in the tasks");
};
const getTask = (req, res) => {
  res.json({id:req.params.id});
};
const createTasks = (req, res) => {
  res.json(req.body);
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
  deleteTasks
};

const express = require("express");
const router = express.Router();
const {
  getallTasks,
  getTask,
  createTasks,
  updateTasks,
  deleteTasks,
} = require("../controller/task");

router.route("/").get(getallTasks).post(createTasks)
router.route("/:id").get(getTask).patch(updateTasks).delete(deleteTasks)

module.exports = router;

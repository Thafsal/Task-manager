const express = require('express')
const router = express.Router()
const {getallTasks} = require('../controller/task')

router.route('/').get(getallTasks)





module.exports = router
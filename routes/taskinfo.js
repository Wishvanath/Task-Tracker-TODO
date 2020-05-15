var express = require('express');
var router = express.Router(); 

var controller = require('../controller/taskinfoController');


// declare route list
router.get('/all-task',controller.allTask);
router.post('/new-task', controller.newTask);
router.get('/delete/:task_id', controller.taskDelete);
router.get('/update/:task_id', controller.taskUpdate);
router.post('/savetask', controller.saveTask);

module.exports = router;
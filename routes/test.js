var express = require('express');
var router = express.Router(); 

var controller = require('../controller/testController');


// declare route list

router.get("/test",controller.Test);
router.get("/ntest", controller.NTest);

module.exports = router;
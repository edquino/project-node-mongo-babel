"use strict";

var _express = require("express");

var _task = require("../controllers/task.controllers");

var router = (0, _express.Router)();
router.get('/tast/add', _task.taskFormAdd);
module["export"] = router; // export default router;
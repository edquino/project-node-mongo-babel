"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _task = require("../controllers/task.controllers");

var router = (0, _express.Router)();
router.get('/', function (req, res) {
  return res.render('index');
});
router.get('/task/add', _task.taskIndex);
router.post('/task/add', _task.createTask);
router.get('/task/edit/:id', _task.taskUpdateForm);
router.post('/task/edit/:id', _task.taskUpdate);
router.get('/task/delete/:id', _task.taskDelete);
router.get('/task/state/:id', _task.taskState); //module.exports = router;

var _default = router;
exports["default"] = _default;
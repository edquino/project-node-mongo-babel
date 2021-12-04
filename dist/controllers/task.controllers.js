"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.taskUpdateForm = exports.taskUpdate = exports.taskState = exports.taskIndex = exports.taskDelete = exports.createTask = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _task = _interopRequireDefault(require("../models/task.model"));

var taskIndex = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var tasks;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _task["default"].find().lean().sort({
              createdAt: 'desc'
            });

          case 3:
            tasks = _context.sent;
            return _context.abrupt("return", res.render('task/task-add', {
              tasks: tasks
            }));

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0.message);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function taskIndex(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.taskIndex = taskIndex;

var createTask = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var task;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            task = (0, _task["default"])(req.body);
            _context2.next = 4;
            return task.save();

          case 4:
            return _context2.abrupt("return", res.redirect('/task/add'));

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0.message);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function createTask(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createTask = createTask;

var taskUpdateForm = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var task;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _task["default"].findById(req.params.id).lean();

          case 3:
            task = _context3.sent;
            return _context3.abrupt("return", res.render('task/task-edit', {
              task: task
            }));

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0.message);

          case 10:
            ;

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function taskUpdateForm(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.taskUpdateForm = taskUpdateForm;

var taskUpdate = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return _task["default"].findByIdAndUpdate(id, req.body);

          case 4:
            return _context4.abrupt("return", res.redirect('/task/add'));

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0.message);

          case 10:
            ;

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 7]]);
  }));

  return function taskUpdate(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.taskUpdate = taskUpdate;

var taskDelete = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _context5.next = 4;
            return _task["default"].findByIdAndDelete(id);

          case 4:
            return _context5.abrupt("return", res.redirect('/task/add'));

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0.message);

          case 10:
            ;

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 7]]);
  }));

  return function taskDelete(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.taskDelete = taskDelete;

var taskState = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var id, task_done;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            id = req.params.id;
            _context6.next = 4;
            return _task["default"].findById(id);

          case 4:
            task_done = _context6.sent;
            task_done.done = !task_done.done;
            _context6.next = 8;
            return task_done.save();

          case 8:
            return _context6.abrupt("return", res.redirect('/task/add'));

          case 11:
            _context6.prev = 11;
            _context6.t0 = _context6["catch"](0);
            console.log(_context6.t0.message);

          case 14:
            ;

          case 15:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 11]]);
  }));

  return function taskState(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.taskState = taskState;
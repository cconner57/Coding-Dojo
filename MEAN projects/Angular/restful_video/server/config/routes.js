const TasksCtrl = require('./../controllers/TasksCtrl.js');

module.exports = app => {
    app.get('/tasks', TasksCtrl.index)
}
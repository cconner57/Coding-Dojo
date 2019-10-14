
const mongoose = require('mongoose');
const Task = mongoose.model('Task');

module.exports = {
    index: (req, res) => {
        Task.find({}, (err, tasks) => {
            if(err) {
                res.json(err);
            }
            else {
                res.json(tasks);
            }
        })
    }
}
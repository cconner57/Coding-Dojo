const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

mongoose.model('Task', TaskSchema);
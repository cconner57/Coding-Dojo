var mongoose = require('mongoose');


var MovieSchema = new mongoose.Schema({
    title: {type : String, required : true, minlength: 3},
    description: {type : String, required : true, minlength: 3},
    completed: {type: Boolean, default: false},
}, {timestamps: true })

mongoose.model('Movie', MovieSchema); 
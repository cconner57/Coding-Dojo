const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Name is required"] },
    age: { type: Number, min: [10, "Age has to be greater than 10"]}
});

mongoose.model("Author", AuthorSchema);
const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: { type: String, min: [3, "Name must be atleast 3 characters long"] },
    type: { type: String, min: [3, "Pet type must be atleast 3 characters long"] },
    description: { type: String, min: [3, "Description must be atleast 3 characters long"] },
    skill1: { type: String, required: [false, ""] },
    skill2: { type: String, required: [false, ""] },
    skill3: { type: String, required: [false, ""] },
});

mongoose.model("Pet", PetSchema);
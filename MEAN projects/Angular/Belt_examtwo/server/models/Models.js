const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Products must contain a Name"] },
    qty: { type: Number, required: [true, "Products must contain a Qty"] },
    price: { type: Number, required: [true, "Products must contain a Price"] },
});

mongoose.model("Product", ProductSchema);
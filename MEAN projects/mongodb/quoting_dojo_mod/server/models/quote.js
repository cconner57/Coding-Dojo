const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({ 
    name: String,
    quote: String
   }, {timestamps: true});

mongoose.model('Quote', QuoteSchema); 
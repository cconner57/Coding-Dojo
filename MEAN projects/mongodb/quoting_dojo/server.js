var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/QD_DB', {useMongoClient: true}); // Required to connect to MongoDB

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static'))); // Sets file path for CSS files
app.set('views', path.join(__dirname, './views')); // Sets file path for ejs files
app.set('view engine', 'ejs');

// Database structure
var QuoteSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2}, // name: String - also works
    message: {type: String, required: true, minlength: 2} // message: Number - also works for fields with digits
}, {timestamps: true}) // optional - adds a date and time
mongoose.model('Quote', QuoteSchema); // Setting this Schema in our Models as 'Quote'
var Quote = mongoose.model('Quote'); // Retrieving this Schema from our Models, named 'Quote'

// Setting index
app.get('/', function (req, res) { // Sets '/'
    res.render('index'); // Renders the file to '/'
})

// Adding information
app.post('/add', function (req, res) {
    console.log("POST DATA", req.body);
    var quote = new Quote({
        name: req.body.name,
        message: req.body.message
    });
    quote.save(function (err) { 
        if (err) { // If error occurs
            console.log('something went wrong');
            console.log(quote.errors);
            res.render('index', { errors: quote.errors })
        } else {
            console.log('successfully added a quote!');
            res.redirect('/quotes');
        }
    })
})

// Gets information from database
app.get('/', function (req, res) {
    Quote.find({}, function (err, quotes) {
        if (err) {
            console.log(err);
        }
        if (quotes) {
            res.render('index', {allQuotes: quotes});
        }
    })
})

// Sets the server
app.listen(8000, function () {
    console.log("Server is live at localhost:8000");
})
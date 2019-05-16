var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var path = require("path");

app.use(bodyParser.json());
app.set('views',path.join(__dirname, './views'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/movies');
require('./server/config/mongoose.js');
var routes = require('./server/config/routes.js');
routes(app);




app.listen(8000, function() {
    console.log("listening on port 8000");
})
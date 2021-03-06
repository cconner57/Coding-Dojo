var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/QD_DB', { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './client/static')));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json()); 

require('./server/config/mongoose.js');

var router = require('./server/config/routes.js');

router(app);

app.listen(8000, function() {
    console.log("listening on port 8000");
});
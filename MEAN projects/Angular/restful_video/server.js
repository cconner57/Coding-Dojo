const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(__dirname + "/static"));

mongoose.connect("mongodb://localhost/task-api", { useNewUrlParser: true });

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8000, function() {
    console.log("listening on 8000");  
});
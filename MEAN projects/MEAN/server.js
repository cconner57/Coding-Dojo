const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/static'));
app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/dojos-db', { useNewUrlParser: true });

var DojoSchema = new mongoose.Schema ({
    location: String,
    capacity: Number,
})

mongoose.model('Dojo', DojoSchema);
var Dojo = mongoose.model('Dojo');


app.get('/', function(req, res) {
    Dojo.find({}, function(err, dojos) {
        if(err) {
            console.log(err);
        }

        if(dojos) {
            res.render('index', { allDojos : dojos });
        }
    })
})

app.post('/dojos', function(req, res) {
    console.log(req.body);
    var dojoToBeCreated = new Dojo();
    dojoToBeCreated.location = req.body.location;
    dojoToBeCreated.capacity = req.body.capacity;

    dojoToBeCreated.save(function(err, dojo) {
        if(err) {
            console.log(err);
        }
        if(dojo) {
            console.log(err);
        }
    })
    res.redirect('/');
})

app.listen(8888, function() {
    console.log("Running on 8888");
})
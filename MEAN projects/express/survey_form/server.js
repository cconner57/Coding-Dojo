const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
let app = express();

app.set('views', path.join(__dirname + "/Views"))
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(request, response){
    response.render('index');
})

app.post('/result', function(request, response){
    response.render('result', {result:request.body})
})
app.listen(8000, function(errs){
    console.log("Server at 8000");
})
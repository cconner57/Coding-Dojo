var express = require("express");
var app = express();

app.use(express.static(__dirname + "/static"));

app.get('/', function (request, response) {
    response.sendFile('index.html', {
        root: __dirname
    });
})
app.get('/cars', function (request, response) {
    response.sendFile('cars.html', {
        root: __dirname
    });
})
app.get('/cats', function (request, response) {
    response.sendFile('cats.html', {
        root: __dirname
    });
})
app.get('/form', function (request, response) {
    response.sendFile('form.html', {
        root: __dirname
    });
})

app.get('/styles.css', function (request, response) {
    response.sendFile('styles.css', {
        root: __dirname + "./static/images"
    });
})
app.get('/car1.jpeg', function (request, response) {
    response.sendFile('car1.jpeg', {
        root: __dirname + "./static"
    });
})

app.get('/car2.jpg', function (request, response) {
    response.sendFile('car2.jpg', {
        root: __dirname + "./static/images"
    });
})

app.get('/cat1.jpg', function (request, response) {
    response.sendFile('cat1.jpg', {
        root: __dirname + "./static/images"
    });
})
app.get('/cat2.jpeg', function (request, response) {
    response.sendFile('cat2.jpeg', {
        root: __dirname + "./static/images"
    });
})
app.listen(8000, function () {
    console.log("listening on port 8000");
})
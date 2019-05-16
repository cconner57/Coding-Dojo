var express = require('express');
var app = express();
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/static/views'); 
app.set('view engine', 'ejs');

app.get('/', function(request, response){
    response.send("<h1>Testing</h1>");
})

app.get("/cats", function(request,response){
    response.render('cats');
})

app.get("/Marmalade", function(request,response){
    var cat_details ={
        name : "Marmalade",
        food : "Fancy Feast",
        pic : "/images/cat1.jpg",
        likes: ["Eating & Sleeping"]

    }
    response.render('details', {cat: cat_details});
})

app.get("/Amos", function(request,response){
    var cat_details ={
        name : "Amos",
        food : "Fancy Feast - dry food",
        pic : "/images/cat2.jpeg",
        likes: ["Always Eating"]

    }
    response.render('details', {cat: cat_details});
})

app.listen(8000, function(){
    console.log("Listening on port 8000")
})
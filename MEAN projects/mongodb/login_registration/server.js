const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const flash = require('express-flash');
const session = require('express-session');

var fs = require('fs');
let app = express();
app.use(flash());

app.set('trust proxy', 1)
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}))



app.use(express.static(__dirname+"/client/static"));
app.set('views', __dirname+"/client/views");
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

require('./server/database');
require('./server/config/routes.js')(app);



app.listen(8000, function(errs){
    console.log("Server at 8000");
})
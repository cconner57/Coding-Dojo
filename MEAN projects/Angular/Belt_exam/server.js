const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + "/public/dist/public/"));

mongoose.connect("mongodb://localhost/pets-db", { useNewUrlParser: true});

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"));
});


app.listen(8000, function() {
    console.log("listening on 8000");
});
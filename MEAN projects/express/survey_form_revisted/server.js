const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
let app = express();
const server = app.listen(8000);
const io = require('socket.io')(server);

app.set('views', path.join(__dirname + "/Views"))
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function (request, response) {
  response.render('index');
})
io.on('connection', function (socket) {
  socket.on('posting_form', function (data) {
    socket.emit('updated_message', {
      msg: "The server recieved<br> Name:" + data.msg['name'] + "<br> Location: " + data.msg['location'] + "<br> Language:" + data.msg['language'] + "<br> Comment: " + data.msg['comment'] + "<br>"
    });
  });
});
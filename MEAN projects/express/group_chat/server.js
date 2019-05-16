const express = require('express');
const path = require('path');
let app = express();
const server = app.listen(8000);
const io = require('socket.io')(server);

app.set('views', path.join(__dirname + "/views"))
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');

app.get('/', function (request, response) {
    response.render('index');
})
var users = {}
io.sockets.on('connection', function (socket) {
    socket.on('register', function (registeration) {
        var username = registeration.name;
        users[socket.id] = username;
    });

    socket.on('msg', function (message) {
        var username = users[socket.id]
        io.emit('msg', {
            msg: `${username} says: ${message.message_text}`
        });
    })
});
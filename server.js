var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);

const SocketServer = require('./js/Server/Communication/SocketServer');

app.use("/js", express.static(__dirname.concat("/js")));
app.use("/css", express.static(__dirname.concat("/css")));
app.use("/assets", express.static(__dirname.concat("/assets")));

app.get("/", function(req, res) {
    res.sendFile(__dirname.concat("/index.html"));
});

server.listen(8081, function() {
    console.log(`[SERVER] New connection opened in port ${server.address().port}.`);
});

let socketServer = new SocketServer(io);
socketServer.init();
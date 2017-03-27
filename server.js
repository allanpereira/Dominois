var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);

app.use("/js", express.static(__dirname.concat("/js")));
app.use("/assets", express.static(__dirname.concat("/assets")));

app.get("/", function(req, res) {
	res.sendFile(__dirname.concat("/index.html"));
});

server.listen(8081, function() {
	console.log("Listening on ".concat(server.address().port));
});

var EventosHelper = require("./js/Helpers/EventosHelper");
var mesa;

io.on(EventosHelper.eventosSocketIo.connection, function(socket) {	
	socket.on(EventosHelper.eventosClient.novoJogadorEntrou, function() {
		console.log("Novo jogador entrou");
		socket.emit(EventosHelper.eventosServer.novoJogadorCriado, "Novo jogador");
	});
});
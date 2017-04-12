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
    console.log("server: Conexão aberta na porta ".concat(server.address().port));
});

var EventosHelper = require("./js/helpers/EventosHelper");

io.on(EventosHelper.instance.eventosSocketIo.connection, function(socket) {
    console.log("server: Pedido de conexão do client recebido, registrando callbacks.");
    
    socket.on(EventosHelper.instance.eventosClient.novoJogadorEntrou, function() {
        var idJogador = 1;
        console.log("server: Pedido de novo jogador recebido do client registrado, id: ".concat(idJogador));
        socket.emit(EventosHelper.instance.eventosServer.novoJogadorCriado, idJogador);
    });
});
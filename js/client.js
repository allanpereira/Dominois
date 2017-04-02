var Client = {};
Client.socket = io.connect();

Client.PedirRegistroNovoJogador = function() {
	console.log("client: Pedindo novo jogador para o server.");
	Client.socket.emit(EventosHelper.eventosClient.novoJogadorEntrou);
}

Client.socket.on(EventosHelper.eventosServer.novoJogadorCriado, function (idJogador) {
	console.log("client: Id jogador recebido do server e encaminhado para o game. Id ".concat(idJogador));
	Game.AdicionarNovoJogador(idJogador);
})
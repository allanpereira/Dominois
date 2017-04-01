var Client = {};
Client.socket = io.connect();

Client.PedirRegistroNovoJogador = function() {
	Client.socket.emit(EventosHelper.eventosClient.novoJogadorEntrou);
}

Client.socket.on(EventosHelper.eventosServer.novoJogadorCriado, function (jogador) {
	Game.AdicionarNovoJogador(jogador);
})
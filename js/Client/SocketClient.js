var SocketClient = function(jogo){
    this.socket = io.connect('localhost:8081', {'sync disconnect on unload' : true });
    
    this.socket.on(EventosHelper.eventosServer.novoJogadorCriado, function (idJogador) {
        console.log("client: Id jogador recebido do server e encaminhado para o game. Id ".concat(idJogador));
        jogo.AoCriarNovoJogador(idJogador);
    });
};

SocketClient.prototype.PedirRegistroNovoJogador = function() {
    console.log("client: Pedindo novo jogador para o server.");
    this.socket.emit(EventosHelper.eventosClient.novoJogadorEntrou);
};
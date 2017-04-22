var SocketClient = function(jogo){
    this.socket = io.connect('localhost:8081', {'sync disconnect on unload' : true });
    
    this.socket.on(EventosHelper.eventosServer.jogadorEntrou, function (result) {
        if(result.success)
            console.log("[CLIENT] Jogador recebido do Server e encaminhado para o game. Id: " + result.player.id + " - Nome: " + result.player.name + ".");

        jogo.AoAdicionarJogador(result);
    });

    this.socket.on(EventosHelper.eventosServer.jogadaRealizadaComSucesso, function (result) {
        if(result.success)
            console.log("[CLIENT] Jogada realizada com sucesso!");

        jogo.AoRealizarJogadaComSucesso(result);
    });
};

SocketClient.prototype.ObterDadosJogador = function(gameId) {
    console.log("[CLIENT] Registrando entrada do jogador no server...");
    this.socket.emit(EventosHelper.eventosClient.jogadorEntrou, {gameId : gameId});
};

SocketClient.prototype.RealizarJogada = function(gameId, value1, value2) {
    console.log("[CLIENT] Enviando jogada ao servidor...");
    this.socket.emit(EventosHelper.eventosClient.jogadaRealizada, { gameId : gameId, value1 : value1, value2 : value2 });
};
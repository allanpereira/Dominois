var SocketClient = function(jogo){
    this.socket = io.connect('localhost:8081', {query : "gameId=" + jogo.gameId, 'sync disconnect on unload' : true });
    
    this.socket.on(EventosHelper.eventosServer.entradaRegistrada, function (result) {
        if(!result.success)
            return;

        console.log("[CLIENT] Jogador recebido do Server e encaminhado para o game. Id: " + result.data.player.id + " - Nome: " + result.data.player.name + ".");
        jogo.AoAdicionarJogador(result.data);
    });

    this.socket.on(EventosHelper.eventosServer.jogadaRealizadaComSucesso, function (result) {
        if(!result.success)
            return;

        console.log("[CLIENT] Jogada realizada com sucesso!");
        jogo.AoRealizarJogadaComSucesso(result.data);
    });

    this.socket.on(EventosHelper.eventosServer.areaDeCompraAlterada, function (result) {
        if(!result.success)
            return;

        console.log("[CLIENT] A área de compra foi alterada!");
        jogo.AoAlterarAreaDeCompra(result.data.boneyard);
    });

    this.socket.on(EventosHelper.eventosServer.entradaDeJogador, function (result) {
        if(!result.success)
            return;

        console.log("[CLIENT] Um novo jogador entrou na partida!");
        jogo.AoEntrarNovoJogador(result.data.player);
    });
};

SocketClient.prototype.RegistrarEntrada = function(gameId) {
    console.log("[CLIENT] Registrando entrada do jogador no server...");
    this.socket.emit(EventosHelper.eventosClient.registrarEntrada, {gameId : gameId});
};

SocketClient.prototype.RealizarJogada = function(gameId, value1, value2, moveType) {
    console.log("[CLIENT] Enviando jogada ao servidor...");
    this.socket.emit(EventosHelper.eventosClient.jogadaRealizada, { gameId : gameId, value1 : value1, value2 : value2, moveType: moveType });
};
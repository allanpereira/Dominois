var SocketClient = function(jogo){
    this.socket = io.connect('localhost:8081', {query : "gameId=" + jogo.gameId, 'sync disconnect on unload' : true });
    
    this.socket.on(EventosHelper.eventosServer.entradaRegistrada, function (result) {
        if(!result.success) return;
        console.log("[CLIENT] Jogador recebido do Server e encaminhado para o game. Id: " + result.data.player.id + " - Nome: " + result.data.player.name + ".");
        new AoRegistrarEntrada().Disparar(jogo, result.data);
    });

    this.socket.on(EventosHelper.eventosServer.jogadaRealizadaComSucesso, function (result) {
        if(!result.success)  return;
        console.log("[CLIENT] Jogada realizada com sucesso!");
        new AoRealizarJogadaComSucesso().Disparar(jogo, result.data);
    });

    this.socket.on(EventosHelper.eventosServer.areaDeCompraAlterada, function (result) {
        debugger;
        if(!result.success)
            return;

        console.log("[CLIENT] A área de compra foi alterada!");
        jogo.AoAlterarAreaDeCompra(result.data);
    });

    this.socket.on(EventosHelper.eventosServer.entradaDeJogador, function (result) {
        debugger;
        if(!result.success)
            return;

        console.log("[CLIENT] Um novo jogador entrou na partida!");
        jogo.AoEntrarNovoJogador(result.data);
    });

    this.socket.on(EventosHelper.eventosServer.saidaDeJogador, function (result) {
        debugger;
        if(!result.success)
            return;
        
        console.log("[CLIENT] Um jogador saiu da partida!");
        jogo.AoSairJogador(result.data);
    });

    this.socket.on(EventosHelper.eventosServer.jogoIniciado, function (result) {
        debugger;
        console.log("[CLIENT] O jogo começou!");
        jogo.AoIniciarJogo(result);
    });

    this.socket.on(EventosHelper.eventosServer.enviaPedra, function (result) {
        debugger;
        if(result.success)
            console.log("[CLIENT] Nova pedra enviada pelo server!");

        jogo.AoReceberPedra(result);
    });

    this.socket.on(EventosHelper.eventosServer.vez, function (result) {
        debugger;
        jogo.AoMudarVez(result.data);
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

SocketClient.prototype.comprarPedra = function(gameId) {
    console.log("[CLIENT] Solicitando pedra ao servidor...");
    this.socket.emit(EventosHelper.eventosClient.pedirPedra, {gameId : gameId});
};
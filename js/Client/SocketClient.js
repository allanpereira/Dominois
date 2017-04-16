var SocketClient = function(jogo){
    this.socket = io.connect('localhost:8081', {'sync disconnect on unload' : true });
    
    this.socket.on(EventosHelper.eventosServer.novoJogadorCriado, function (player) {
        console.log("[CLIENT] Jogador recebido do Server e encaminhado para o game. Id: " + player.id + " - Nome: " + player.name + ".");
        jogo.AoCriarNovoJogador(player);
    });

    this.socket.on(EventosHelper.eventosServer.jogadaRealizadaComSucesso, function (domino) {
        console.log("[CLIENT] Jogada realizada com sucesso!");
        jogo.AoRealizarJogadaComSucesso(domino);
    });
};

SocketClient.prototype.PedirRegistroNovoJogador = function() {
    console.log("[CLIENT] Pedindo novo jogador para o server...");
    this.socket.emit(EventosHelper.eventosClient.novoJogadorEntrou);
};

SocketClient.prototype.RealizarJogada = function(value1, value2) {
    console.log("[CLIENT] Enviando jogada ao servidor...");
    this.socket.emit(EventosHelper.eventosClient.jogadaRealizada, { value1 : value1, value2 : value2 });
};
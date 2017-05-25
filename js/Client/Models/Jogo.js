// Require MesaFactory
// Require Tela
// Require Mesa
// Require SpriteComprar
// Require MaoPrincipal

//Classe
var Jogo = function(gameId){
    this.jogador = null;
    this.gameId = gameId;
    this.vez = false;
    this.iniciado = false;
    this.notificacao = new Notificacao().Configurar();
    this.tela = new Tela(new Mesa(), new MaoPrincipal(), new SpriteComprar());
    this.socketClient = new SocketClient(this);
};

//Enviar Eventos
Jogo.prototype.AoCriarEstadoInicial = function(){
    this.socketClient.RegistrarEntrada(this.gameId);
};

Jogo.prototype.JogarPedra = function(pedra, moveType) {
    this.socketClient.RealizarJogada(this.gameId, pedra.valorSuperior, pedra.valorInferior, moveType);
};

//Métodos do Jogo
Jogo.prototype.PodeJogar = function(){
    return this.iniciado && this.vez;
};

Jogo.prototype.RegistrarEntrada = function(player) {
    var pedras = PedraFactory.CriarPedrasAPartirDoServer(player.dominoes);
    this.jogador = new Jogador(player.id, pedras);
    
    console.log("[JOGO] Jogador criado e registrado no Server.");

    this.TrocarEstadoParaPartida();
    this.IniciarPartida();
};


Jogo.prototype.AlterarEstado = function(state){
    this.iniciado = state === "STARTED";
};

Jogo.prototype.AlterarTurno = function(turns) {
    for(var i = 0; i < turns.length; i++) {
        if (this.jogador.id == turns[i].playerId) {
            this.vez = turns[i].turn;
        }
    }    
};

Jogo.prototype.MoverPedraParaMesa = function(domino, moveType) {
	var pedra = this.jogador.BuscarPedraPorValores(domino.value1, domino.value2);
	
    if (pedra == null) {
        pedra = PedraFactory.CriarPedra(domino.value1, domino.value2);
        pedra.sprite.CarregarSpritePhaser({x: 0, y: 0});
    }
	
    this.tela.mesa.JogarPedra(pedra, moveType);
    console.log("[JOGO] A pedra " + domino.value1 + "|" + domino.value2 + " foi jogada. MoveType: " + moveType);
};

Jogo.prototype.AdicionarPedra = function(domino) {	
    var pedra = PedraFactory.CriarPedra(domino.value1, domino.value2);
	this.jogador.AdicionarPedra(pedra);
	this.tela.maoPrincipal.AdicionarPedra(pedra);
};

Jogo.prototype.IniciarPartida = function(){
    console.log("[JOGO] Partida iniciada.");
    console.log("[JOGO] Jogador: ");
    console.log(this.jogador);
};

// Isto será removido quando tivermos o "monte de compra" na tela do jogo.
var boneyardCount = document.getElementById("boneyard");

Jogo.prototype.AtualizarAreaDeCompra = function(size){
    boneyardCount.innerHTML = size + " pedras na área de compra.";
}

// Troca de Estados
Jogo.prototype.TrocarEstadoParaPartida = function(){
    console.log("[JOGO] Carregando as pedras na tela...");
    game.state.start(new EstadoPrincipal(this).nome);
};

console.log("[JOGO] Objeto jogo criado.");

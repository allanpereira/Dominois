// Require MesaFactory
// Require Tela
// Require Mesa
// Require SpriteComprar
// Require MaoPrincipal

//Classe
var Jogo = function(gameId){

    this.tela = new Tela(new Mesa(), new MaoPrincipal(), new SpriteComprar());
    this.jogador = undefined;
    this.pedraJogando = undefined;
    this.gameId = gameId;
	this.socketClient = new SocketClient(this);

    this.AoCriarEstadoInicial = function(){
        this.socketClient.RegistrarEntrada(this.gameId);
    };

    this.AoAdicionarJogador = function(data){
        this.AdicionarNovoJogador(data.player);
        this.AoAlterarAreaDeCompra(data.boneyard);
    };

    this.AoJogarPedra = function(value1, value2, moveType){
        this.socketClient.RealizarJogada(this.gameId, value1, value2, moveType);
    };

    this.AoRealizarJogadaComSucesso = function(data){
        this.MoverPedraParaMesa(data.domino, data.moveType);
    };

    this.AoReceberPedra = function(result){
        console.log("[JOGO] A pedra " + result.domino[0].value1 + "|" + result.domino[0].value1 + " foi recebida.");
    };
	
    this.AoAlterarAreaDeCompra = function(boneyard){
        this.AtualizarAreaDeCompra(boneyard.size);
    }
};

//Métodos
Jogo.prototype.ObterLarguraTela = function(){
    return this.tela.largura;
};

Jogo.prototype.ObterAlturaTela = function(){
    return this.tela.altura;
};

Jogo.prototype.AdicionarNovoJogador = function(player) {
    var pedras = PedraFactory.CriarPedrasAPartirDoServer(player.dominoes);
    this.jogador = new Jogador(pedras);
    
    console.log("[JOGO] Jogador criado e registrado no Server.");

    this.TrocarEstadoParaPartida();
    this.IniciarPartida();
};

Jogo.prototype.MoverPedraParaMesa = function(domino, moveType) {
	// TODO: Tirar o pedraJogando e procurar a pedra com base no seus valores na mão de todos os jogadores na sala
	// a variável pedraJogando não estará com o valor correto no browser de todos os jogadores;
    this.tela.mesa.JogarPedra(this.pedraJogando, moveType);
    console.log("[JOGO] A pedra " + domino.value1 + "|" + domino.value2 + " foi jogada. MoveType: " + moveType);
};

Jogo.prototype.TrocarEstadoParaPartida = function(){
    console.log("[JOGO] Carregando as pedras na tela...");
    game.state.start('Game');
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

//Estados
Jogo.prototype.ObterEstadoInicial = function(){
    var self = this;

    return {
        init : function(){
            this.game.stage.disableVisibilityChange = true;
        },
        create : function(){
            console.log("[JOGO] Criando o estado inicial do jogo...");

            this.game.stage.backgroundColor = self.tela.backgroundColor;
            self.AoCriarEstadoInicial();
        }
    };
};

Jogo.prototype.ObterEstadoPrincipal = function(){
    var self = this;
	
	// TODO: Só implementar o envento de click no sprite da pedra a cada rodada,
	// por que assim teremos bloqueamos o clique caso ela não seja jogável
    var aoClicarNaPedra = function(sprite){
        self.pedraJogando = sprite.data;
		sprite.data.AoReceberClique(self.tela.mesa, function(pedra, moveType) {
			self.AoJogarPedra(pedra.valorSuperior, pedra.valorInferior, moveType);
		});        
    };

	// TODO: Só permiter a compra em caso do usuário não ter nenhuma pedra a jogar
    var aoClicarEmComprar = function() {
        this.socketClient.comprarPedra(this.gameId);
    };
	
	var TornarSpriteClicavel = function(sprite, callbackAoClicar) {
		sprite.inputEnabled = true;
		sprite.input.useHandCursor = true;
		sprite.events.onInputDown.add(callbackAoClicar, this); 
	}

    return {
        preload : function(){
            game.load.image(self.tela.mesa.sprite.nome, AssetsHelper.BuscarImagemMesa(self.tela.mesa.sprite.nome));
            game.load.image(self.tela.spriteComprar.nome, AssetsHelper.BuscarImagemComprar(self.tela.spriteComprar.nome));

            self.jogador.ParaCadaPedra(function(pedra) {
                game.load.image(pedra.sprite.nome, AssetsHelper.BuscarImagemPedra(pedra.sprite.nome));
            });
        },

        create : function(){
            game.add.sprite(self.tela.mesa.sprite.posicao.x, self.tela.mesa.sprite.posicao.y, self.tela.mesa.sprite.nome);

            self.jogador.ParaCadaPedra(function(pedra) {
                pedra.sprite.phaserSprite = game.add.sprite(self.tela.maoPrincipal.posicaoProximaPedra.x, self.tela.maoPrincipal.posicaoProximaPedra.y, pedra.sprite.nome);
				pedra.sprite.phaserSprite.data = pedra;

				TornarSpriteClicavel(pedra.sprite.phaserSprite, aoClicarNaPedra);
                self.tela.maoPrincipal.AdicionarPedra(pedra);
            });

            var spriteComprar = game.add.sprite(self.tela.spriteComprar.posicao.x, self.tela.spriteComprar.posicao.y, self.tela.spriteComprar.nome);
            TornarSpriteClicavel(spriteComprar, aoClicarEmComprar);  
        }
    };
};

console.log("[JOGO] Objeto jogo criado.");
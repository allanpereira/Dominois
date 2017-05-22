// Require MesaFactory
// Require Tela
// Require Mesa
// Require SpriteComprar
// Require MaoPrincipal
// Require MaoSecundaria

//Classe
var Jogo = function(gameId){
    this.jogador = undefined;
    this.pedraJogando = undefined;
    this.gameId = gameId;
    this.vez = false;
    this.iniciado = false;

    this.fixedToastr = undefined;
    
    this.tela = new Tela(new Mesa(), new MaoPrincipal(), new SpriteComprar(), new MaoSecundaria());
    this.socketClient = new SocketClient(this);

    toastr.options.preventDuplicates = true;
};

// Getters/Setters
Jogo.prototype.ObterLarguraTela = function(){
    return this.tela.largura;
};

Jogo.prototype.ObterAlturaTela = function(){
    return this.tela.altura;
};


//Enviar Eventos
Jogo.prototype.AoCriarEstadoInicial = function(){
    this.socketClient.RegistrarEntrada(this.gameId);
};

Jogo.prototype.AoJogarPedra = function(value1, value2, moveType){
    this.socketClient.RealizarJogada(this.gameId, value1, value2, moveType);
};

//Notificações
Jogo.prototype.NotificarJogoIniciado = function(){
    toastr.success("O jogo começou!");
};
Jogo.prototype.NotificarEntradaJogador = function(player){
    toastr.info(player.name + " entrou no jogo!");
};
Jogo.prototype.NotificarSaidaJogador = function(player){
    toastr.warning(player.name + " saiu do jogo!");
};

Jogo.prototype.NotificarEstado = function(){
    if(this.fixedToastr)
        this.fixedToastr.remove();

    var options = {timeOut: 0, extendedTimeOut: 0, tapToDismiss : false};
    if(this.iniciado && this.vez){
        this.fixedToastr = toastr.success("Faça sua jogada.", "", options);
    }else if(this.iniciado){
        this.fixedToastr = toastr.warning("Esperando por outro jogador.", "", options);
    }else{
        this.fixedToastr = toastr.warning("Esperando outros jogadores para iniciar o jogo...", "", options);
    }
};

//Métodos do Jogo
Jogo.prototype.PodeJogar = function(){
    return this.iniciado && this.vez;
};

Jogo.prototype.RegistrarEntrada = function(player) {
    var pedras = PedraFactory.CriarPedrasAPartirDoServer(player.dominoes);
    this.jogador = new Jogador(pedras);
    
    console.log("[JOGO] Jogador criado e registrado no Server.");

    this.TrocarEstadoParaPartida();
    this.IniciarPartida();
};

Jogo.prototype.AlterarEstado = function(state){
    this.iniciado = state === "STARTED";
};

Jogo.prototype.AlterarTurno = function(turn){
    this.vez = turn;
};

Jogo.prototype.MoverPedraParaMesa = function(domino, moveType) {
    // TODO: Tirar o pedraJogando e procurar a pedra com base no seus valores na mão de todos os jogadores na sala
    // a variável pedraJogando não estará com o valor correto no browser de todos os jogadores;
    this.tela.mesa.JogarPedra(this.pedraJogando, moveType);
    console.log("[JOGO] A pedra " + domino.value1 + "|" + domino.value2 + " foi jogada. MoveType: " + moveType);
};

Jogo.prototype.AdicionarPedra = function(domino){
    var self = this;
    var pedra = PedraFactory.CriarPedra(domino.value1, domino.value2);
    this.jogador.AdicionarPedra(pedra);



    /**************************************************************************/
    /*********   REFATORAR, JÁ EXISTE NO MOMENTO DA CRIAÇÃO INICIAL   *********/
    /**************************************************************************/

    // TODO: Só implementar o envento de click no sprite da pedra a cada rodada,
    // por que assim teremos bloqueamos o clique caso ela não seja jogável
    var aoClicarNaPedra = function(sprite){
        if(!self.PodeJogar())
            return;

        self.pedraJogando = sprite.data;

        sprite.data.AoReceberClique(self.tela.mesa, function(pedra, moveType) {
            self.AoJogarPedra(pedra.valorSuperior, pedra.valorInferior, moveType);
        });
    };
    this.adicionarSpritePedra(pedra, aoClicarNaPedra);
};

Jogo.prototype.AdicionarPedraComprada = function(domino){
    var self = this;
    var pedra = PedraFactory.CriarPedra(domino.value1, domino.value2);
    this.jogador.AdicionarPedra(pedra);

    var aoClicarNaPedra = function(sprite){
        self.pedraJogando = sprite.data;

        sprite.data.AoReceberClique(self.tela.mesa, function(pedra, moveType) {
            self.AoJogarPedra(pedra.valorSuperior, pedra.valorInferior, moveType);
        });
    };
    this.adicionarSpritePedraComprada(pedra, aoClicarNaPedra);
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

// Sprite Functions
// TODO: Refatorar e colocar em algum lugar mais adequado. Aqui está ruim.
Jogo.prototype.adicionarSpritePedra = function(pedra, aoClicarNaPedra){
    pedra.sprite.phaserSprite = game.add.sprite(this.tela.maoPrincipal.posicaoProximaPedra.x, this.tela.maoPrincipal.posicaoProximaPedra.y, pedra.sprite.nome);
    pedra.sprite.phaserSprite.data = pedra;

    this.TornarSpriteClicavel(pedra.sprite.phaserSprite, aoClicarNaPedra);
    this.tela.maoPrincipal.AdicionarPedra(pedra);
};

Jogo.prototype.adicionarSpritePedraComprada = function(pedra, aoClicarNaPedra){
    pedra.sprite.phaserSprite = game.add.sprite(this.tela.maoSecundaria.posicaoProximaPedra.x, this.tela.maoSecundaria.posicaoProximaPedra.y, pedra.sprite.nome);
    pedra.sprite.phaserSprite.data = pedra;

    this.TornarSpriteClicavel(pedra.sprite.phaserSprite, aoClicarNaPedra);
    this.tela.maoSecundaria.AdicionarPedra(pedra);
};

Jogo.prototype.TornarSpriteClicavel = function(sprite, callbackAoClicar) {
    sprite.inputEnabled = true;
    sprite.input.useHandCursor = true;
    sprite.events.onInputDown.add(callbackAoClicar, this); 
};

// Troca de Estados
Jogo.prototype.TrocarEstadoParaPartida = function(){
    console.log("[JOGO] Carregando as pedras na tela...");
    game.state.start('Game');
};

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
    
    // TODO: Só implementar o evento de click no sprite da pedra a cada rodada,
    // por que assim teremos bloqueamos o clique caso ela não seja jogável
    var aoClicarNaPedra = function(sprite){
        if(!self.PodeJogar())
            return;
        
        self.pedraJogando = sprite.data;

        sprite.data.AoReceberClique(self.tela.mesa, function(pedra, moveType) {
            self.AoJogarPedra(pedra.valorSuperior, pedra.valorInferior, moveType);
        });
    };

    // TODO: Só permitir a compra em caso do usuário não ter nenhuma pedra a jogar
    var aoClicarEmComprar = function() {
        self.socketClient.comprarPedra(self.game.id);
    };

    return {
        preload : function(){
            console.log(self.tela.mesa);
            game.load.image(self.tela.mesa.sprite.nome, AssetsHelper.BuscarImagemMesa(self.tela.mesa.sprite.nome));
            game.load.image(self.tela.spriteComprar.nome, AssetsHelper.BuscarImagemComprar(self.tela.spriteComprar.nome));


            //TODO: Workaround. Fix it.
            PedraFactory.ParaCadaPedraPossivel(function(pedra){
                game.load.image(pedra.sprite.nome, AssetsHelper.BuscarImagemPedra(pedra.sprite.nome));
            });
        },

        create : function(){
            game.add.sprite(self.tela.mesa.sprite.posicao.x, self.tela.mesa.sprite.posicao.y, self.tela.mesa.sprite.nome);

            self.jogador.ParaCadaPedra(function(pedra){
                self.adicionarSpritePedra(pedra, aoClicarNaPedra);
            });

            var spriteComprar = game.add.sprite(self.tela.spriteComprar.posicao.x, self.tela.spriteComprar.posicao.y, self.tela.spriteComprar.nome);
            self.TornarSpriteClicavel(spriteComprar, aoClicarEmComprar);  
        }
    };
};

console.log("[JOGO] Objeto jogo criado.");
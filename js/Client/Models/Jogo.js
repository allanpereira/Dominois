// Require MesaFactory
// Require Tela
// Require SpriteMesa
// Require MaoPrincipal

//Classe
var Jogo = function(){
    this.socketClient = new SocketClient(this);
    this.tela = new Tela(new SpriteMesa(), new MaoPrincipal());
    this.mesa = MesaFactory.CriarMesa();

    //TODO: Verificar porque tem uma instância aqui e a mesma em Mesa.
    this.jogador = undefined;

    this.AoPreCarregarEstadoPrincipal = function(){
        console.log("Game: Carregando os arquivos para a partida");
    };

    this.AoCriarEstadoPrincipal = function(){
        console.log("Game: Criando o jogo e pedindo novo jogador para o client");
        this.socketClient.PedirRegistroNovoJogador();
    };

    this.AoCriarNovoJogador = function(idJogador){
        this.AdicionarNovoJogador(idJogador);
    };
};

//Métodos
Jogo.prototype.ObterLarguraTela = function(){
    return this.tela.largura;
};

Jogo.prototype.ObterAlturaTela = function(){
    return this.tela.altura;
};

Jogo.prototype.AdicionarNovoJogador = function(idJogador) {
    this.jogador = new Jogador();
    this.mesa.AdicionarNovoJogador(this.jogador);
    
    console.log("Game: Jogador criado e registrado na mesa");

    this.IniciarPartida();
};

Jogo.prototype.IniciarPartida = function(){
    console.log("Game: partida iniciada");
    this.mesa.DistribuirPedrasParaJogadores();
    
    console.log("Game: status jogador: ");
    console.log(this.jogador);
    
    console.log("Game: exibindo as pedras na tela");
    var self = this;
    this.jogador.ParaCadaPedra(function(pedra) {
        game.add.sprite(self.tela.maoPrincipal.posicaoProximaPedra.x, self.tela.maoPrincipal.posicaoProximaPedra.y, pedra.sprite.nome);
        self.tela.maoPrincipal.AdicionarPedra(pedra);
    });
};


//Estados
Jogo.prototype.ObterEstadoPrincipal = function(){
    var self = this;

    return {
        init : function(){
            this.game.stage.disableVisibilityChange = true;
        },

        preload : function(){
            self.AoPreCarregarEstadoPrincipal();
            this.game.load.image(self.tela.spriteMesa.nome, AssetsHelper.BuscarImagemMesa(self.tela.spriteMesa.nome));

            self.mesa.ParaCadaPedraDisponivel(function(pedra) {
                this.game.load.image(pedra.sprite.nome, AssetsHelper.BuscarImagemPedra(pedra.sprite.nome));
            });
        },

        create : function(){
            this.game.stage.backgroundColor = self.tela.backgroundColor;
            this.game.add.sprite(self.tela.spriteMesa.posicao.x, self.tela.spriteMesa.posicao.y, self.tela.spriteMesa.nome);
            self.AoCriarEstadoPrincipal();
        }
    };
};

console.log("Game: objeto game criado");
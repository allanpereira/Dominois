var MaoPrincipal = function() {
    this.posicaoInicial = {
        x : 162,
        y : 450
    };
    
    this.posicaoProximaPedra = this.posicaoInicial;

    this.pedras = [];
};

MaoPrincipal.prototype.AdicionarPedra = function(pedra) {

    this.pedras.push({"nome":pedra.nome,"x":this.posicaoProximaPedra.x,"y":this.posicaoProximaPedra.y});    

    pedra.sprite.CarregarSpritePhaser({
        x: this.posicaoProximaPedra.x,
		y: this.posicaoProximaPedra.y
    });

    var x = this.posicaoProximaPedra.x;    

    if (x >= 706 ){
        this.posicaoProximaPedra.x = 162;
        this.posicaoProximaPedra.y = this.posicaoProximaPedra.y - pedra.sprite.altura;
    } else {
        this.posicaoProximaPedra.x = x + pedra.sprite.largura;
    }
};

MaoPrincipal.prototype.RemoverPedra = function(domino, jogador) {

    var maoJogador = jogador.pedras;

    var nome = String(domino.value1) + String(domino.value2);

    var pedraPos = this.pedras.map(function(x) {return x.nome; }).indexOf(nome);

    var pedraRmv = this.pedras[pedraPos];
    //pedraRmv = nome , x , y >>> da pedra removida

    console.log(maoJogador);
    console.log(pedraRmv);
    
};
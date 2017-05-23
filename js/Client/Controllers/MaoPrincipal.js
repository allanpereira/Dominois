var MaoPrincipal = function() {
    this.posicaoInicial = {
        x : 162,
        y : 450
    };
    
    this.posicaoProximaPedra = this.posicaoInicial;    
};

MaoPrincipal.prototype.AdicionarPedra = function(pedra) {

    console.log(pedra);

    var x = this.posicaoProximaPedra.x;    

    if (x >= 706 ){
        this.posicaoProximaPedra.x = 162;
        this.posicaoProximaPedra.y = this.posicaoProximaPedra.y - 130;
    } else {
        this.posicaoProximaPedra.x = x + pedra.sprite.largura;
    }
};
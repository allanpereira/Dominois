var MaoPrincipal = function() {
    this.posicaoInicial = {
        x : 162,
        y : 450
    };
    
    this.posicaoProximaPedra = this.posicaoInicial;
};

MaoPrincipal.prototype.AdicionarPedra = function(pedra) {
    this.posicaoProximaPedra.x =  this.posicaoProximaPedra.x + pedra.sprite.largura;
};
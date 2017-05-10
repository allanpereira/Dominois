var MaoSecundaria = function() {
    this.posicaoInicial = {
        x : 162,
        y : 320
    };
    
    this.posicaoProximaPedra = this.posicaoInicial;
};

MaoSecundaria.prototype.AdicionarPedra = function(pedra) {
    this.posicaoProximaPedra.x =  this.posicaoProximaPedra.x + pedra.sprite.largura;
};
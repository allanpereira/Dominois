var MaoPrincipal = function() {
    this.posicaoInicial = {
        x : 162,
        y : 450
    };
    
    this.posicaoProximaPedra = this.posicaoInicial;    
};

MaoPrincipal.prototype.AdicionarPedra = function(pedra) {

    pedra.sprite.CarregarSpritePhaser({
        x: this.maoPrincipal.posicaoProximaPedra.x,
		y: this.maoPrincipal.posicaoProximaPedra.y
    });

    var x = this.posicaoProximaPedra.x;    

    if (x >= 706 ){
        this.posicaoProximaPedra.x = 162;
        this.posicaoProximaPedra.y = this.posicaoProximaPedra.y - pedra.sprite.altura;
    } else {
        this.posicaoProximaPedra.x = x + pedra.sprite.largura;
    }
};
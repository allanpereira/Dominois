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

    if (x >= 706){
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
    
    debugger;

    for (var i = 0; i < maoJogador.length; i++){
        if (nome == maoJogador[i].nome){
            if (pedraRmv.x <= 162 && pedraRmv.y >=320){
                maoJogador[i].sprite.phaserSprite.x = 706;
                maoJogador[i].sprite.phaserSprite.y += 130;
            } else {
                for (var z = i; z < maoJogador.length; z++){
                    maoJogador[z].sprite.phaserSprite.x -= 68;
                }
            }
        }
    }

    this.posicaoProximaPedra.x = maoJogador[maoJogador.length - 1].sprite.phaserSprite.x + 68;
    this.posicaoProximaPedra.y = maoJogador[maoJogador.length - 1].sprite.phaserSprite.y;
};
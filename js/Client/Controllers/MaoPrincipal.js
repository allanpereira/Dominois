var MaoPrincipal = function(alturaTela) {
    this.posicaoInicial = {
        x : 350,
        y : alturaTela - 230
    };
    
    this.posicaoProximaPedra = {
        x: this.posicaoInicial.x,
        y: this.posicaoInicial.y
    }
    this.pedras = [];
};

MaoPrincipal.prototype.AdicionarPedra = function(pedra, tamanhoTela) {

    this.pedras.push({
        "nome" : pedra.nome,
        "x" : this.posicaoProximaPedra.x,
        "y" : this.posicaoProximaPedra.y
    });

    pedra.sprite.CarregarSpritePhaser({
        x : this.posicaoProximaPedra.x,
        y : this.posicaoProximaPedra.y
    });

    var x = this.posicaoProximaPedra.x;
    if (x >= tamanhoTela.largura - this.posicaoInicial.x){
        this.posicaoProximaPedra.x = this.posicaoInicial.x;
        this.posicaoProximaPedra.y = this.posicaoProximaPedra.y - pedra.sprite.altura;
    } else {
        this.posicaoProximaPedra.x = x + pedra.sprite.largura;
    }
};

MaoPrincipal.prototype.RemoverPedra = function(pedraRmv, jogador) {

    for (var i = 0; i < jogador.pedras.length; i++) {
        if (pedraRmv.nome != jogador.pedras[i].nome) continue;

        if (pedraRmv.x <= 162 && pedraRmv.y >=320){
            jogador.pedras[i].sprite.phaserSprite.x = 706;
            jogador.pedras[i].sprite.phaserSprite.y += 130;
        } else {
            for (var z = i; z < jogador.pedras.length; z++){
                jogador.pedras[z].sprite.phaserSprite.x -= 68;
            }
        }

        break;
    }

    jogador.pedras.splice(i, 1);

    if (jogador.pedras.length != 0) {
        this.posicaoProximaPedra.x = jogador.pedras[jogador.pedras.length - 1].sprite.phaserSprite.x + 68;
        this.posicaoProximaPedra.y = jogador.pedras[jogador.pedras.length - 1].sprite.phaserSprite.y;
    }
};

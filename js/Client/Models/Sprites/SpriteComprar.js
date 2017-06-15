var SpriteComprar = function() {
    this.nome = "comprar";
    
    this.posicao = {
        x: 100,
        y: 10
    };
    
    this.tamanho = {
        altura: 50,
        largura: 70
    };
	
    this.texto = {
        quantidade: 0,
        Mensagem: function() {
            if (this.quantidade == 0) return "Passar a vez";
            return "Comprar ({0})".replace("{0}", this.quantidade);
        },
        objetoPhaser: null
    }

	this.phaserSprite;
};

SpriteComprar.prototype.CarregarSpritePhaser = function(qtdePedrasDisponiveis) {
	this.phaserSprite = game.add.sprite(this.posicao.x, this.posicao.y, this.nome);
    this.AtualizarTexto(qtdePedrasDisponiveis);
}

SpriteComprar.prototype.AtualizarTexto = function(qtdePedrasDisponiveis) {
    this.texto.quantidade = qtdePedrasDisponiveis;

    if (this.phaserSprite == null) return;

    if (this.texto.objetoPhaser == null) {
        this.texto.objetoPhaser = game.add.text(10, 17, "", { strokeThickness: 1});
        this.phaserSprite.addChild(this.texto.objetoPhaser);
    }
    this.texto.objetoPhaser.setText(this.texto.Mensagem());    
}

SpriteComprar.prototype.TornarSpriteClicavel = function(jogo, quantidadePedrasJogador) {
   new TornarCompraClicavel().Tornar(jogo, this, quantidadePedrasJogador, this.texto.quantidade);
}

SpriteComprar.prototype.RemoverEventoClick = function() {
   new TornarSpriteClicavel().Remover(this.phaserSprite);
}


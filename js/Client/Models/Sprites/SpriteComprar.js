var SpriteComprar = function() {
    this.nome = "comprar";
    
    this.posicao = {
        x: 90,
        y: 0
    };
    
    this.tamanho = {
        altura: 50,
        largura: 70
    };
	
	this.phaserSprite;
};

SpriteComprar.prototype.CarregarSpritePhaser = function() {
	this.phaserSprite = game.add.sprite(this.posicao.x, this.posicao.y, this.nome);
}

SpriteComprar.prototype.TornarSpriteClicavel = function(opcoesJogada) {
   new TornarCompraClicavel().Tornar(this, opcoesJogada);
}

SpriteComprar.prototype.RenoverEventoClick = function() {
   // TODO: Remover evento click do spritePhaser
}


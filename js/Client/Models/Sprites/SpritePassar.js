var SpritePassar = function() {
    this.nome = "passar";
    
    this.posicao = {
        x: 350,
        y: 0
    };
    
    this.tamanho = {
        altura: 50,
        largura: 70
    };
	
	this.phaserSprite;
};

SpritePassar.prototype.CarregarSpritePhaser = function() {
	this.phaserSprite = game.add.sprite(this.posicao.x, this.posicao.y, this.nome);
}

SpritePassar.prototype.TornarSpriteClicavel = function(jogo, liberarPassagem) {
   new TornarPassarClicavel().Tornar(jogo, this, liberarPassagem);
}

SpritePassar.prototype.RemoverEventoClick = function() {
   new TornarSpriteClicavel().Remover(this.phaserSprite);
}


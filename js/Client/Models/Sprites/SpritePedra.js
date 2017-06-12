var SpritePedra = function(nome) {
    this.nome = nome;	
    this.altura = 130;
    this.largura = 68;
    this.phaserSprite;
    this.rotacaoSprite;
}

SpritePedra.prototype.CarregarSpritePhaser = function(posicao) {
   this.phaserSprite = game.add.sprite(posicao.x, posicao.y, this.nome);
}
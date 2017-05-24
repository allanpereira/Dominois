var SpritePedra = function(nome) {
    this.nome = nome;	
    this.altura = 130;
    this.largura = 68;
    this.phaserSprite;
}

SpritePedra.prototype.CarregarSpritePhaser = function(posicao) {
   this.phaserSprite = game.add.sprite(posicao.x, posicao.y, this.nome);
}

SpritePedra.prototype.TornarSpriteClicavel = function(jogo, opcoesJogada) {
   new TonarPedraClicavel().Tornar(jogo, this, opcoesJogada);
}

SpritePedra.prototype.RenoverEventoClick = function() {
   new TornarSpriteClicavel().Remover(this.phaserSprite);
}

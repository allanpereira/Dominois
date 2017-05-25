var Pedra = function(nome, valorSuperior, valorInferior, sprite) {
    this.nome = nome;
    this.valorSuperior = valorSuperior;
    this.valorInferior = valorInferior;	
    this.sprite = sprite;
    this.temValoresIguais = this.valorSuperior == this.valorInferior;
}

Pedra.prototype.TornarSpriteClicavel = function(jogo, opcoesJogada) {
   new TornarPedraClicavel().Tornar(jogo, this, opcoesJogada);
}

Pedra.prototype.RemoverEventoClick = function() {
   new TornarSpriteClicavel().Remover(this.sprite.phaserSprite);
}
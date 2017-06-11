var JogarEmPedraEmPeDeitadaParaEsquerda = function() {}

JogarEmPedraEmPeDeitadaParaEsquerda.prototype.Jogar = function(pedra) {
  return new JogadaSprite
  (
    pedra.sprite.spritePhaser.position.x - ultimaPedra.sprite.largura,
    pedra.sprite.spritePhaser.position.y - ultimaPedra.sprite.largura,
    Rotacao.NaoRotacionar
  );
}

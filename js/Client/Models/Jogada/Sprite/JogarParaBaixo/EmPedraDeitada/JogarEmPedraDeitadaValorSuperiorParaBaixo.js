var JogarEmPedraDeitadaValorSuperiorParaBaixo = function() {}

JogarEmPedraDeitadaValorSuperiorParaBaixo.prototype.Jogar = function(pedra) {
  return new JogadaSprite
  (
    pedra.sprite.spritePhaser.position.x + (pedra.sprite.altura/2),
    pedra.sprite.spritePhaser.position.y + (pedra.sprite.largura),
    Rotacao.NaoRotacionar
  );
}

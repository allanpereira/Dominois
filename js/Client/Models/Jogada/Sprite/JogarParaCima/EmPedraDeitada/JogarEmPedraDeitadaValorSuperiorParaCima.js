var JogarEmPedraDeitadaValorSuperiorParaCima = function() {}

JogarEmPedraDeitadaValorSuperiorParaCima.prototype.Jogar = function(pedra) {
  return new JogadaSprite
  (
    pedra.sprite.spritePhaser.position.x + (pedra.sprite.altura),
    pedra.sprite.spritePhaser.position.y - (pedra.sprite.largura*1,5),
    Rotacao.CentoEOitenta
  );
}

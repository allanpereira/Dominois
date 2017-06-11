var JogarEmPedraDeitadaValorSuperiorParaDireita = function(){}

JogarEmPedraDeitadaValorSuperiorParaDireita.prototype.Jogar = function(pedra) {
  return new JogadaSprite
  (
    pedra.sprite.spritePhaser.position.x + pedra.sprite.largura,
    pedra.speite.spritePhaser.position.y + (2 * pedra.sprite.largura),
    RotacaoSprite.DuzentosESetenta
  );
}

var JogarEmPedraDeitadaValorInferiorParaEsquerda = function() {}

JogarEmPedraDeitadaValorInferiorParaEsquerda.prototype.Jogar = function(pedra) {
  console.log(this);
  return new JogadaSprite
  (
    pedra.sprite.phaserSprite.position.x - pedra.sprite.altura,
    pedra.sprite.phaserSprite.position.y + (1.5 * pedra.sprite.largura),
    RotacaoSprite.DuzentosESetenta,
    pedra.sprite.phaserSprite.position.x - pedra.sprite.altura
  );
}

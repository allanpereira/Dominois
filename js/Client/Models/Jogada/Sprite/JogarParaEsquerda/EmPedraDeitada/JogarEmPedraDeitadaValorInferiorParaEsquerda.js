var JogarEmPedraDeitadaValorInferiorParaEsquerda = function() {}

JogarEmPedraDeitadaValorInferiorParaEsquerda.prototype.Jogar = function(pedra) {
  console.log(this);
  return new JogadaSprite
  (
    pedra.sprite.phaserSprite.position.x - pedra.sprite.largura,
    pedra.sprite.phaserSprite.position.y - (pedra.sprite.altura*0.5),
    Rotacao.Noventa
  );
}

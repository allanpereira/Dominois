var JogarEmPedraDeitadaValorSuperiorParaEsquerda = function(){}

JogarEmPedraDeitadaValorSuperiorParaEsquerda.prototype.Jogar = function(pedra) {
  console.log(this);
  return new JogadaSprite
  (
    pedra.sprite.phaserSprite.position.x + pedra.sprite.largura,
    pedra.sprite.phaserSprite.position.y + (2 * pedra.sprite.largura),
    RotacaoSprite.DuzentosESetenta
  );
}

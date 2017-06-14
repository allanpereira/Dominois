var JogarEmPedraDeitadaValorSuperiorParaEsquerda = function(){}

JogarEmPedraDeitadaValorSuperiorParaEsquerda.prototype.Jogar = function(pedra) {
  console.log(this);
  return new JogadaSprite
  (
    pedra.sprite.phaserSprite.position.x,
    pedra.sprite.phaserSprite.position.y + (0.5*pedra.sprite.largura),
    RotacaoSprite.Noventa,
    pedra.sprite.phaserSprite.position.x - pedra.sprite.altura
  );
}

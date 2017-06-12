var JogarEmPedraDeitadaValorSuperiorParaDireita = function(){}

JogarEmPedraDeitadaValorSuperiorParaDireita.prototype.Jogar = function(pedra) {
  console.log(this);
  return new JogadaSprite
  (
    pedra.sprite.phaserSprite.position.x + pedra.sprite.largura,
    pedra.sprite.phaserSprite.position.y + (1.5*pedra.sprite.largura),
    RotacaoSprite.DuzentosESetenta
  );
}

var JogarEmPedraNoventaDeitadaParaEsquerda = function() {}

JogarEmPedraNoventaDeitadaParaEsquerda.prototype.Jogar = function(pedra) {
  console.log(this);
  return new JogadaSprite
  (
    pedra.sprite.phaserSprite.position.x - (pedra.sprite.altura + pedra.sprite.largura),
    pedra.sprite.phaserSprite.position.y - (0.5 * pedra.sprite.largura),
    RotacaoSprite.NaoRotacionar,
    pedra.sprite.phaserSprite.position.x - (pedra.sprite.altura + pedra.sprite.largura)
  );
}

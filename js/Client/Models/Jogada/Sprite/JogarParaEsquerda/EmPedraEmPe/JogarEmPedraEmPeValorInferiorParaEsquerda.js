var JogarEmPedraEmPeValorInferiorParaEsquerda = function() {}

JogarEmPedraEmPeValorInferiorParaEsquerda.prototype.Jogar = function(pedra) {
 return new JogadaSprite
 (
    pedra.sprite.phaserSprite.position.x - pedra.sprite.largura,
    pedra.sprite.phaserSprite.position.y + pedra.sprite.altura,
    RotacaoSprite.DuzentosESetenta
 );
}

var JogarEmPedraEmPeValorInferiorParaDireita = function() {}

JogarEmPedraEmPeValorInferiorParaDireita.prototype.Jogar = function(pedra) {
	return new JogadaSprite
	(
		pedra.sprite.phaserSprite.position.x + pedra.sprite.altura,
		pedra.sprite.phaserSprite.position.y,
		RotacaoSprite.Noventa
	);
}

var JogarEmPedraDuzentosESetentaValorInferiorParaDireita = function() {}

JogarEmPedraDuzentosESetentaValorInferiorParaDireita.prototype.Jogar = function(pedra) {
	console.log(this);
	return new JogadaSprite
	(
		pedra.sprite.phaserSprite.position.x + (2*pedra.sprite.altura),
		pedra.sprite.phaserSprite.position.y - pedra.sprite.largura,
		RotacaoSprite.Noventa
	);
}

var JogarEmPedraCentoEOitentaValorInferiorParaCima = function() {}

JogarEmPedraCentoEOitentaValorInferiorParaCima.prototype.Jogar = function(pedra) {
    console.log(this);
	return new JogadaSprite
	(
		pedra.sprite.phaserSprite.position.x - pedra.sprite.largura,
		pedra.sprite.phaserSprite.position.y - (2*pedra.sprite.altura),
		RotacaoSprite.NaoRotacionar
	);
}

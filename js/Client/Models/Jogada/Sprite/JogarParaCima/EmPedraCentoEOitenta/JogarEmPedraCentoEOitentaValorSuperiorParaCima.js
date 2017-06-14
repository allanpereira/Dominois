var JogarEmPedraCentoEOitentaValorSuperiorParaCima = function() {}

JogarEmPedraCentoEOitentaValorSuperiorParaCima.prototype.Jogar = function(pedra) {
    console.log(this);
	return new JogadaSprite
	(
		pedra.sprite.phaserSprite.position.x,
		pedra.sprite.phaserSprite.position.y - pedra.sprite.altura,
		RotacaoSprite.CentoEOitenta,
		pedra.sprite.phaserSprite.position.y - (2*pedra.sprite.altura)
	);
}

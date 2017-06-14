var JogarEmPedraCentoEOitentaDeitadaParaCima = function() {}

JogarEmPedraCentoEOitentaDeitadaParaCima.prototype.Jogar = function(pedra) {
    console.log(this);
	return new JogadaSprite
	(
		pedra.sprite.phaserSprite.position.x + (0.5*pedra.sprite.largura),
		pedra.sprite.phaserSprite.position.y - pedra.sprite.altura - pedra.sprite.largura,
		RotacaoSprite.Noventa,
		pedra.sprite.phaserSprite.position.y - pedra.sprite.altura - 2*pedra.sprite.largura
	);
}

var JogarEmPedraCentoEOitentaDeitadaParaBaixo = function() {}

JogarEmPedraCentoEOitentaDeitadaParaBaixo.prototype.Jogar = function(pedra) {
    console.log(this);
	return new JogadaSprite
	(
		pedra.sprite.phaserSprite.position.x + (0.5 * pedra.sprite.largura),
		pedra.sprite.phaserSprite.position.y,
		RotacaoSprite.Noventa
	);
}

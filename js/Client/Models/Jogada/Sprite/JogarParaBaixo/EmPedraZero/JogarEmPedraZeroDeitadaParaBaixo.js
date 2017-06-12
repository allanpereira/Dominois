var JogarEmPedraZeroDeitadaParaBaixo = function() {}

JogarEmPedraZeroDeitadaParaBaixo.prototype.Jogar = function(pedra) {
	return new JogadaSprite
	(
		pedra.sprite.phaserSprite.position.x,
		pedra.sprite.phaserSprite.position.y,
		RotacaoSprite.Noventa
	);
}

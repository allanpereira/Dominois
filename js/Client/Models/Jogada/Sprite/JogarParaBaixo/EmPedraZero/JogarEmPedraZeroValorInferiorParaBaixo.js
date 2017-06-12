var JogarEmPedraZeroValorInferiorParaBaixo = function() {}

JogarEmPedraZeroValorInferiorParaBaixo.prototype.Jogar = function(pedra) {
	return new JogadaSprite
	(
		pedra.sprite.phaserSprite.position.x,
		pedra.sprite.phaserSprite.position.y,
		RotacaoSprite.NaoRotacionar
	);
}

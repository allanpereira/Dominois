var VirarParaBaixoEmPedraZeroValorInferior = function() {}

VirarParaBaixoEmPedraZeroValorInferior.prototype.Jogar = function(pedra) {
	console.log(this);
	return new JogadaSprite
	(
		pedra.sprite.phaserSprite.position.x,
		pedra.sprite.phaserSprite.position.y,
		RotacaoSprite.NaoRotacionar
	);
}

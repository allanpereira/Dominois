var VirarParaDireitaEmPedraZeroValorInferior = function() {}

VirarParaDireitaEmPedraZeroValorInferior.prototype.Jogar = function(pedra) {
	console.log(this);
	return new JogadaSprite
	(
		pedra.sprite.phaserSprite.position.x,
		pedra.sprite.phaserSprite.position.y,
		RotacaoSprite.NaoRotacionar
	);
}

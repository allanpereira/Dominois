var VirarParaCimaEmPedraDuzentosESetentaValorInferior = function() {}

VirarParaCimaEmPedraDuzentosESetentaValorInferior.prototype.Jogar = function(pedra) {
	console.log(this);
	return new JogadaSprite
	(
		pedra.sprite.phaserSprite.position.x + pedra.sprite.largura - 5,
		pedra.sprite.phaserSprite.position.y - (pedra.sprite.largura + pedra.sprite.altura),
		RotacaoSprite.NaoRotacionar
	);
}

var VirarParaEsquerdaEmPedraZeroValorInferior = function() {}

VirarParaEsquerdaEmPedraZeroValorInferior.prototype.Jogar = function(pedra) {
	console.log(this);
	return new JogadaSprite
	(
		pedra.sprite.phaserSprite.position.x - pedra.sprite.altura,
		pedra.sprite.phaserSprite.position.y + pedra.sprite.largura,
		RotacaoSprite.DuzentosESetenta
	);
}

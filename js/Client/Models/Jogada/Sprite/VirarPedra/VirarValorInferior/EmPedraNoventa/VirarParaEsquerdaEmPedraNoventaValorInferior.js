var VirarParaEsquerdaEmPedraNoventaValorInferior = function() {}

VirarParaEsquerdaEmPedraNoventaValorInferior.prototype.Jogar = function(pedra) {
	console.log(this);
	return new JogadaSprite
	(
		pedra.sprite.phaserSprite.position.x - 3*pedra.sprite.altura,
		pedra.sprite.phaserSprite.position.y + pedra.sprite.largura,
		RotacaoSprite.DuzentosESetenta
	);
}

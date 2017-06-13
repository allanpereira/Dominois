var VirarParaBaixoEmPedraNoventaValorInferior = function() {}

VirarParaBaixoEmPedraNoventaValorInferior.prototype.Jogar = function(pedra) {
	console.log(this);
	return new JogadaSprite
	(
		pedra.sprite.phaserSprite.position.x - pedra.sprite.largura + 5,
		pedra.sprite.phaserSprite.position.y + (pedra.sprite.altura + pedra.sprite.largura),
		RotacaoSprite.CentoEOitenta
	);
}

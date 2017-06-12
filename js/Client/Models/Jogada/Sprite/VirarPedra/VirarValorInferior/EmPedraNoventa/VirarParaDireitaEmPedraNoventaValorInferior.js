var VirarParaDireitaEmPedraNoventaValorInferior = function() {}

VirarParaDireitaEmPedraNoventaValorInferior.prototype.Jogar = function(pedra) {
	console.log(this);
	return new JogadaSprite
	(
		pedra.sprite.phaserSprite.position.x - pedra.sprite.largura,
		pedra.sprite.phaserSprite.position.y + (pedra.sprite.altura + pedra.sprite.largura),
		RotacaoSprite.CentoEOitenta
	);
}

var VirarParaCimaEmPedraDuzentosESetentaValorSuperior = function() {}

VirarParaCimaEmPedraDuzentosESetentaValorSuperior.prototype.Jogar = function(pedra) {
	console.log(this);
	return new JogadaSprite
	(
		pedra.sprite.phaserSprite.position.x + pedra.sprite.altura,
		pedra.sprite.phaserSprite.position.y - pedra.sprite.largura,
		RotacaoSprite.CentoEOitenta
	);
}

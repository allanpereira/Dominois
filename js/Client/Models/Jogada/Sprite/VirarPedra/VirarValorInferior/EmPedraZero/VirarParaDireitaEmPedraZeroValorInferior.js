var VirarParaDireitaEmPedraZeroValorInferior = function() {}

VirarParaDireitaEmPedraZeroValorInferior.prototype.Jogar = function(pedra) {
	console.log(this);
	return new JogadaSprite
	(
		pedra.sprite.phaserSprite.position.x + pedra.sprite.altura + pedra.sprite.largura,
		pedra.sprite.phaserSprite.position.y + pedra.sprite.largura - 5,
		RotacaoSprite.Noventa
	);
}

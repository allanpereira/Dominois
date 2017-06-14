var JogarEmPedraZeroValorInferiorParaBaixo = function() {}

JogarEmPedraZeroValorInferiorParaBaixo.prototype.Jogar = function(pedra) {
    console.log(this);
	return new JogadaSprite
	(
		pedra.sprite.phaserSprite.position.x + pedra.sprite.largura,
		pedra.sprite.phaserSprite.position.y + (2*pedra.sprite.altura),
		RotacaoSprite.CentoEOitenta,
		pedra.sprite.phaserSprite.position.y + (2*pedra.sprite.altura)
	);
}

var JogarEmPedraZeroValorSuperiorParaCima = function() {}

JogarEmPedraZeroValorSuperiorParaCima.prototype.Jogar = function(pedra) {
    console.log(this);
	return new JogadaSprite
	(
		pedra.sprite.phaserSprite.position.x + pedra.sprite.largura,
		pedra.sprite.phaserSprite.position.y,
		RotacaoSprite.CentoEOitenta
	);
}

var JogarEmPedraEmPeValorSuperiorParaCima = function() {}

JogarEmPedraEmPeValorSuperiorParaCima.prototype.Jogar = function(pedra) {
	return new JogadaSprite
	(
		pedra.sprite.spritePhaser.position.y - (pedra.sprite.altura),
		RotacaoSprite.CentoEOitenta
	);
}

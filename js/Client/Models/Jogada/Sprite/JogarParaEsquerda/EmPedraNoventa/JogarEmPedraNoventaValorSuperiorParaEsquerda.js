var JogarEmPedraNoventaValorSuperiorParaEsquerda = function() {}

JogarEmPedraNoventaValorSuperiorParaEsquerda.prototype.Jogar = function(pedra) {
	console.log(this);
	return new JogadaSprite
	(
		pedra.sprite.phaserSprite.position.x - pedra.sprite.altura,
		pedra.sprite.phaserSprite.position.y,
		RotacaoSprite.Noventa,
		pedra.sprite.phaserSprite.position.x - (2*pedra.sprite.altura)
	);
}

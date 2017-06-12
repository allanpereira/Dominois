var JogarEmPedraNoventaValorSuperiorParaDireita = function() {}

JogarEmPedraNoventaValorSuperiorParaDireita.prototype.Jogar = function(pedra) {
	console.log(this);
	return new JogadaSprite
	(
		pedra.sprite.phaserSprite.position.x,
		pedra.sprite.phaserSprite.position.y + pedra.sprite.largura,
		RotacaoSprite.DuzentosESetenta
	);
}

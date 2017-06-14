var JogarEmPedraZeroDeitadaParaCima = function() {}

JogarEmPedraZeroDeitadaParaCima.prototype.Jogar = function(pedra) {
    console.log(this);
	return new JogadaSprite
	(
		pedra.sprite.phaserSprite.position.x + 1.5*pedra.sprite.largura,
		pedra.sprite.phaserSprite.position.y - pedra.sprite.largura,
		RotacaoSprite.Noventa,
		pedra.sprite.phaserSprite.position.y - pedra.sprite.largura
	);
}

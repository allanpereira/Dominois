var JogarEmPedraZeroDeitadaParaBaixo = function() {}

JogarEmPedraZeroDeitadaParaBaixo.prototype.Jogar = function(pedra) {
    console.log(this);
	return new JogadaSprite
	(
		pedra.sprite.phaserSprite.position.x + (1.5 * pedra.sprite.largura),
		pedra.sprite.phaserSprite.position.y + pedra.sprite.altura,
		RotacaoSprite.Noventa
	);
}

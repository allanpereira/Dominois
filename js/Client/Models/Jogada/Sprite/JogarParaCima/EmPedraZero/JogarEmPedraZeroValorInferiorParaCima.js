var JogarEmPedraZeroValorInferiorParaCima = function() {}

JogarEmPedraZeroValorInferiorParaCima.prototype.Jogar = function(pedra) {
    console.log(this);
	return new JogadaSprite
	(
		pedra.sprite.phaserSprite.position.x,
		pedra.sprite.phaserSprite.position.y - pedra.sprite.altura,
		RotacaoSprite.NaoRotacionar
	);
}

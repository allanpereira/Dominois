var JogarValorInferiorParaDireita = function() {}

JogarValorInferiorParaDireita.prototype.Jogar = function(pedra) {
	switch (pedra.sprite.rotacaoSprite) {
		case RotacaoSprite.NaoRotacionar:
			return new JogarEmPedraDeitadaValorInferiorParaDireita().Jogar(pedra);
		case RotacaoSprite.Noventa:
			return new JogarEmPedraNoventaValorInferiorParaDireita().Jogar(pedra);
		case RotacaoSprite.DuzentosESetenta:
			return new JogarEmPedraDuzentosESetentaValorInferiorParaDireita().Jogar(pedra);
	}
}

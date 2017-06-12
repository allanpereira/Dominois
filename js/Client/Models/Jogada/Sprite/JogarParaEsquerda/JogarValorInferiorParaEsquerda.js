var JogarValorInferiorParaEsquerda = function() {}

JogarValorInferiorParaEsquerda.prototype.Jogar = function(pedra) {
	switch (pedra.sprite.rotacaoSprite) {
        case RotacaoSprite.NaoRotacionar:
			return new JogarEmPedraDeitadaValorInferiorParaEsquerda().Jogar(pedra);
        case RotacaoSprite.Noventa:
            return new JogarEmPedraNoventaValorInferiorParaEsquerda().Jogar(pedra);
        case RotacaoSprite.DuzentosESetenta:
            return new JogarEmPedraDuzentosESetentaValorInferiorParaEsquerda().Jogar(pedra);
    }
}
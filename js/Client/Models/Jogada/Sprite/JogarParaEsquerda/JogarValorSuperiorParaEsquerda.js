var JogarValorSuperiorParaEsquerda = function() {}

JogarValorSuperiorParaEsquerda.prototype.Jogar = function(pedra) {
	switch (pedra.sprite.rotacaoSprite) {
        case RotacaoSprite.NaoRotacionar:
			return new JogarEmPedraDeitadaValorSuperiorParaEsquerda().Jogar(pedra);
        case RotacaoSprite.Noventa:
            return new JogarEmPedraNoventaValorSuperiorParaEsquerda().Jogar(pedra);
        case RotacaoSprite.DuzentosESetenta:
            return new JogarEmPedraDuzentosESetentaValorSuperiorParaEsquerda().Jogar(pedra);
    }
}

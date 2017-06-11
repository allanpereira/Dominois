var JogarParaEsquerda = function() {}

JogarParaEsquerda.prototype.Jogar = function(ladoPedra, pedra) {
	switch(ladoPedra) {
		case LadoPedra.Deitada:
			return new JogarDeitadaParaEsquerda().Jogar(pedra);
			break;
		case LadoPedra.Superior:
			return new JogarValorSuperiorParaEsquerda().Jogar(pedra);
			break;
		case LadoPedra.Inferior:
			return new JogarValorInferiorParaEsquerda().Jogar(pedra);
			break;
	}
}
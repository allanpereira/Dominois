var JogarParaBaixo = function() {}

JogarParaBaixo.prototype.Jogar = function(ladoPedra, pedra) {
	switch(ladoPedra) {
		case LadoPedra.Deitada:
			return new JogarDeitadaParaBaixo().Jogar(pedra);
			break;
		case LadoPedra.Superior:
			return new JogarValorSuperiorParaBaixo().Jogar(pedra);
			break;
		case LadoPedra.Inferior:
			return new JogarValorInferiorParaBaixo().Jogar(pedra);
			break;
	}
}
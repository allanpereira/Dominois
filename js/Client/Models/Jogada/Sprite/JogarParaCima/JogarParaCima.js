var JogarParaCima = function() {}

JogarParaCima.prototype.Jogar = function(ladoPedra, pedra) {
	switch(ladoPedra) {
		case LadoPedra.Deitada:
			return new JogarDeitadaParaCima().Jogar(pedra);
			break;
		case LadoPedra.Superior:
			return new JogarValorSuperiorParaCima().Jogar(pedra);
			break;
		case LadoPedra.Inferior:
			return new JogarValorInferiorParaCima().Jogar(pedra);
			break;
	}
}
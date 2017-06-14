var JogarParaCima = function() {}

JogarParaCima.prototype.Jogar = function(ladoPedra, pedra) {
	switch(ladoPedra) {
		case LadoPedra.Deitada:
			return new JogarDeitadaParaCima().Jogar(pedra);
		case LadoPedra.Superior:
			return new JogarValorSuperiorParaCima().Jogar(pedra);
		case LadoPedra.Inferior:
			return new JogarValorInferiorParaCima().Jogar(pedra);
	}
}
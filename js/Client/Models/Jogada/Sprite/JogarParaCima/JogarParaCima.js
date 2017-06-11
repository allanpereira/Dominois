var JogarParaCima = function() {}

JogarParaCima.prototype.Jogar = function(ladoPedra, pedra) {
	switch(ladoPedra) {
		case LadoPedra.Deitada:
			return new JogarDeitadaParaCima().Jogar(pedra);
			break;
		case LadoPedra.Superior:
			return new JogarValorSuperiorParaDireita().Jogar(pedra);
			break;
		case LadoPedra.Inferior:
			return new JogarValorInferiorParaDireita().Jogar(pedra);
			break;
	}
}
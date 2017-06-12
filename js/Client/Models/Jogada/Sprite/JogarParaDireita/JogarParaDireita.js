var JogarParaDireita = function() {}

JogarParaDireita.prototype.Jogar = function(ladoPedra, pedra) {
	switch(ladoPedra) {
		case LadoPedra.Deitada:
			return new JogarDeitadaParaDireita().Jogar(pedra);
		case LadoPedra.Superior:
			return new JogarValorSuperiorParaDireita().Jogar(pedra);
		case LadoPedra.Inferior:
			return new JogarValorInferiorParaDireita().Jogar(pedra);
	}
}
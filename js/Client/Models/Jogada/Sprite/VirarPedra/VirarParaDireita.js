var VirarParaDireita = function() {}

VirarParaDireita.prototype.Jogar = function(ladoPedra, pedra) {
	switch (ladoPedra) {
		case LadoPedra.Deitada:
			return new VirarParaDireitaValorSuperior().Jogar(pedra);
		case LadoPedra.Superior:
			return new VirarParaDireitaValorSuperior().Jogar(pedra);
		case LadoPedra.Inferior:
			return new VirarParaDireitaValorInferior().Jogar(pedra);	
	}
}

var VirarParaDireita = function() {}

VirarParaDireita.prototype.Jogar = function(ladoPedra, pedra) {
	switch (ladoPedra) {
		case LadoPedra.Superior:
			return new VirarParaDireitaValorSuperior().Jogar(pedra);
			break;
		case LadoPedra.Inferior:
			return new VirarParaDireitaValorInferior().Jogar(pedra);
			break;		
	}
}

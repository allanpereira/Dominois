var VirarParaEsquerda = function() {}

VirarParaEsquerda.prototype.Jogar = function(ladoPedra, pedra) {
	switch (ladoPedra) {
		case LadoPedra.Superior:
			return new VirarParaEsquerdaValorSuperior().Jogar(pedra);
			break;
		case LadoPedra.Inferior:
			return new VirarParaEsquerdaValorInferior().Jogar(pedra);
			break;		
	}
}

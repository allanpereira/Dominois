var VirarParaCima = function() {}

VirarParaCima.prototype.Jogar = function(ladoPedra, pedra) {
	switch (ladoPedra) {
		case LadoPedra.Superior:
			return new VirarParaCimaValorSuperior().Jogar(pedra);
		case LadoPedra.Inferior:
			return new VirarParaCimaValorInferior().Jogar(pedra);		
	}
}

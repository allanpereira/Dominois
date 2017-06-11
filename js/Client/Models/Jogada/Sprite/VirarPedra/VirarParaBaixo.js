var VirarParaBaixo = function() {}

VirarParaBaixo.prototype.Jogar = function(ladoPedra, pedra) {
	switch (ladoPedra) {
		case LadoPedra.Superior:
			return new VirarParaBaixoValorSuperior().Jogar(pedra);
		case LadoPedra.Inferior:
			return new VirarParaBaixoValorInferior().Jogar(pedra);		
	}
}

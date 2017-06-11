var JogarValorInferiorParaCima = function() {}

JogarValorInferiorParaCima.prototype.Jogar = function(pedra) {
	if (pedra.valorSuperior == pedra.valorInferior) {
		return new JogarEmPedraDeitadaValorInferiorParaCima().Jogar(pedra);
	} else {
		return new JogarEmPedraEmPeValorInferiorParaCima().Jogar(pedra);
	}
}

var JogarValorInferiorParaEsquerda = function() {}

JogarValorInferiorParaEsquerda.prototype.Jogar = function(pedra) {
	if (pedra.valorSuperior == pedra.valorInferior) {
		return new JogarEmPedraDeitadaValorInferiorParaEsquerda().Jogar(pedra);
	} else {
		return new JogarEmPedraEmPeValorInferiorParaEsquerda().Jogar(pedra);
	}
}

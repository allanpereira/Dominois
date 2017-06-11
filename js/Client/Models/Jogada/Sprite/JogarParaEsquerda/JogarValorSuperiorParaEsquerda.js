var JogarValorSuperiorParaEsquerda = function() {}

JogarValorSuperiorParaEsquerda.prototype.Jogar = function(pedra) {
	if (pedra.valorSuperior == pedra.valorInferior) {
		return new JogarEmPedraDeitadaValorSuperiorParaEsquerda().Jogar(pedra);
	} else {
		return new JogarEmPedraEmPeValorSuperiorParaEsquerda().Jogar(pedra);
	}
}

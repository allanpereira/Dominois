var JogarValorSuperiorParaDireita = function() {}

JogarValorSuperiorParaDireita.prototype.Jogar = function(pedra) {
	if (pedra.valorSuperior == pedra.valorInferior) {
		return new JogarEmPedraDeitadaValorSuperiorParaCima().Jogar(pedra);
	} else {
		return new JogarEmPedraEmPeValorSuperiorParaCima().Jogar(pedra);
	}
}

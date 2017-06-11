var JogarValorSuperiorParaDireita = function() {}

JogarValorSuperiorParaDireita.prototype.Jogar = function(pedra) {
	if (pedra.valorSuperior == pedra.valorInferior) {
		return new JogarEmPedraDeitadaValorSuperiorParaDireita().Jogar(pedra);
	} else {
		return new JogarEmPedraEmPeValorSuperiorParaDireita().Jogar(pedra);
	}
}

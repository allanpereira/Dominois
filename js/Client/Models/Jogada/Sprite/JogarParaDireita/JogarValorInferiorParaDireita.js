var JogarValorInferiorParaDireita = function() {}

JogarValorInferiorParaDireita.prototype.Jogar = function(pedra) {
	if (pedra.valorSuperior == pedra.valorInferior) {
		return new JogarEmPedraDeitadaValorInferiorParaDireita().Jogar(pedra);
	} else {
		return new JogarEmPedraEmPeValorInferiorParaDireita().Jogar(pedra);
	}
}

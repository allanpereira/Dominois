var JogarParaCimaOuParaEsquerda = function() {}

JogarParaCimaOuParaEsquerda.prototype.Jogar = function(jogarSpritePedra, ladoPedra, pedra, mesa) {
	try {
		return new TentarJogarParaCima().Jogar(ladoPedra, pedra, mesa);
	} catch (ex) {
		jogarSpritePedra.proximaJogada = new JogarParaEsquerdaOuParaBaixo();
		return new VirarParaEsquerda().Jogar(ladoPedra, pedra);
	}
}

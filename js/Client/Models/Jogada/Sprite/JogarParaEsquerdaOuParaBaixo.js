var JogarParaEsquerdaOuParaBaixo = function() {}

JogarParaEsquerdaOuParaBaixo.prototype.Jogar = function(jogarSpritePedra, ladoPedra, pedra, mesa) {
	try {
		return new TentarJogarParaEsquerda().Jogar(ladoPedra, pedra, mesa);
	} catch (ex) {
		console.log(ex);
		jogarSpritePedra.jogada = new JogarParaBaixoOuParaDireita();
		return new VirarParaBaixo().Jogar(ladoPedra, pedra);
	}
}

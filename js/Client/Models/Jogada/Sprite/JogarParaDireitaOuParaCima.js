var JogarParaDireitaOuParaCima = function() {}

JogarParaDireitaOuParaCima.prototype.Jogar = function(jogarSpritePedra, ladoPedra, pedra, mesa) {
	try {
		return new TentarJogarParaDireita().Jogar(ladoPedra, pedra, mesa);
	} catch (ex) {
		console.log(ex);
		jogarSpritePedra.jogada = new JogarParaCimaOuParaEsquerda();
		return new VirarParaCima().Jogar(ladoPedra, pedra);
	}
}

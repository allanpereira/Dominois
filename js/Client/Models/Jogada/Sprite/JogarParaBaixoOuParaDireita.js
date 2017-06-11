var JogarParaBaixoOuParaDireita = function() {}

JogarParaBaixoOuParaDireita.prototype.Jogar = function(jogarSpritePedra, ladoPedra, pedra, mesa) {
	try {
		return new TentarJogarParaBaixo().Jogar(ladoPedra, pedra, mesa);
	} catch (ex) {
		jogarSpritePedra.proximaJogada = new JogarParaDireitaOuParaCima();
		return new VirarParaDireita().Jogar(ladoPedra, pedra);
	}
}

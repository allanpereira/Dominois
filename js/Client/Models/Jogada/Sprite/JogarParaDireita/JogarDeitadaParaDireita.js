var JogarDeitadaParaDireita = function() {}

JogarDeitadaParaDireita.prototype.Jogar = function(pedra) {
	switch (pedra.sprite.rotacaoSprite) {
		case RotacaoSprite.Noventa:
			return new JogarEmPedraNoventaDeitadaParaDireita().Jogar(pedra);
		case RotacaoSprite.DuzentosESetenta:
			return new JogarEmPedraDuzentosESetentaDeitadaParaDireita().Jogar(pedra);
	}
}

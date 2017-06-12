var JogarDeitadaParaDireita = function() {}

JogarDeitadaParaDireita.prototype.Jogar = function(pedra) {
	switch (pedra.sprite.phaserSprite.angle) {
		case RotacaoSprite.Noventa:
			return new JogarEmPedraNoventaDeitadaParaDireita().Jogar(pedra);
		case RotacaoSprite.DuzentosESetenta:
			return new JogarEmPedraDuzentosESetentaDeitadaParaDireita().Jogar(pedra);
	}
}

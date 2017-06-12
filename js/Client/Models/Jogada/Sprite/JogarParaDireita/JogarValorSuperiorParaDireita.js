var JogarValorSuperiorParaDireita = function() {}

JogarValorSuperiorParaDireita.prototype.Jogar = function(pedra) {
	switch (pedra.sprite.phaserSprite.angle) {
		case RotacaoSprite.NaoRotacionar:
			return new JogarEmPedraDeitadaValorSuperiorParaDireita().Jogar(pedra);
		case RotacaoSprite.Noventa:
			return new JogarEmPedraNoventaValorSuperiorParaDireita().Jogar(pedra);
		case RotacaoSprite.DuzentosESetenta:
			return new JogarEmPedraDuzentosESetentaValorSuperiorParaDireita().Jogar(pedra);
	}
}

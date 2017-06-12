var JogarValorSuperiorParaDireita = function() {}

JogarValorSuperiorParaDireita.prototype.Jogar = function(pedra) {
	switch (pedra.sprite.rotacaoSprite) {
        case RotacaoSprite.NaoRotacionar:
            return new JogarEmPedraZeroValorSuperiorParaBaixo().Jogar(pedra);
		case RotacaoSprite.Noventa:
            return new JogarEmPedraNoventaValorSuperiorParaBaixo().Jogar(pedra);
        case RotacaoSprite.CentoEOitenta:
            return new JogarEmPedraCentoEOitentaValorSuperiorParaBaixo().Jogar(pedra);
    }
}

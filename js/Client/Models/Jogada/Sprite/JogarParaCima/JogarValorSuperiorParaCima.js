var JogarValorSuperiorParaDireita = function() {}

JogarValorSuperiorParaDireita.prototype.Jogar = function(pedra) {
	switch (pedra.sprite.rotacaoSprite) {
        case RotacaoSprite.NaoRotacionar:
            return new JogarEmPedraZeroValorSuperiorParaCima().Jogar(pedra);
		case RotacaoSprite.Noventa:
            return new JogarEmPedraNoventaValorSuperiorParaCima().Jogar(pedra);
        case RotacaoSprite.CentoEOitenta:
            return new JogarEmPedraCentoEOitentaValorSuperiorParaCima().Jogar(pedra);
    }
}

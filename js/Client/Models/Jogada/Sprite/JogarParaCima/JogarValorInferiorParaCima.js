var JogarValorInferiorParaCima = function() {}

JogarValorInferiorParaCima.prototype.Jogar = function(pedra) {
	switch (pedra.sprite.rotacaoSprite) {
        case RotacaoSprite.NaoRotacionar:
            return new JogarEmPedraZeroValorInferiorParaCima().Jogar(pedra);
		case RotacaoSprite.Noventa:
            return new JogarEmPedraNoventaValorInferiorParaCima().Jogar(pedra);
        case RotacaoSprite.CentoEOitenta:
            return new JogarEmPedraCentoEOitentaValorInferiorParaCima().Jogar(pedra);
    }
}

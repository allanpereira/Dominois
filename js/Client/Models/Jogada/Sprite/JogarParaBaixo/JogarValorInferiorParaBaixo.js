var JogarValorInferiorParaBaixo = function() {}

JogarValorInferiorParaBaixo.prototype.Jogar = function(pedra) {
	switch (pedra.sprite.rotacaoSprite) {
        case RotacaoSprite.NaoRotacionar:
            return new JogarEmPedraZeroValorInferiorParaBaixo().Jogar(pedra);
		case RotacaoSprite.Noventa:
            return new JogarEmPedraNoventaValorInferiorParaBaixo().Jogar(pedra);
        case RotacaoSprite.CentoEOitenta:
            return new JogarEmPedraCentoEOitentaValorInferiorParaBaixo().Jogar(pedra);
    }
}

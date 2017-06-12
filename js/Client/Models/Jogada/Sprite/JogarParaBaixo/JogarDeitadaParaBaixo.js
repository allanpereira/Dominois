var JogarDeitadaParaBaixo = function() {}

JogarDeitadaParaBaixo.prototype.Jogar = function(pedra) {
	switch (pedra.sprite.rotacaoSprite) {
        case RotacaoSprite.NaoRotacionar:
            return new JogarEmPedraZeroDeitadaParaBaixo().Jogar(pedra);
        case RotacaoSprite.CentoEOitenta:
            return new JogarEmPedraCentoEOitentaDeitadaParaBaixo().Jogar(pedra);
    }
}

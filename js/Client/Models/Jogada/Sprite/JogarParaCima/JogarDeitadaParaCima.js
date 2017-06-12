var JogarDeitadaParaCima = function() {}

JogarDeitadaParaCima.prototype.Jogar = function(pedra) {
	switch (pedra.sprite.rotacaoSprite) {
        case RotacaoSprite.NaoRotacionar:
            return new JogarEmPedraZeroDeitadaParaCima().Jogar(pedra);
        case RotacaoSprite.CentoEOitenta:
            return new JogarEmPedraCentoEOitentaDeitadaParaCima().Jogar(pedra);
    }
}

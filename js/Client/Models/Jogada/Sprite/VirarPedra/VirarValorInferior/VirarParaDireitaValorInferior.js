var VirarParaDireitaValorInferior = function() {}

VirarParaDireitaValorInferior.prototype.Jogar = function(pedra) {
	switch (pedra.sprite.rotacaoSprite) {
        case RotacaoSprite.NaoRotacionar: 
            return new VirarParaDireitaEmPedraZeroValorInferior().Jogar(pedra);
        case RotacaoSprite.Noventa:
            return new VirarParaDireitaEmPedraNoventaValorInferior().Jogar(pedra);
        case RotacaoSprite.CentoEOitenta:
            return new VirarParaDireitaEmPedraCentoEOitentaValorInferior().Jogar(pedra);
    }
}


var VirarParaEsquerdaValorInferior = function() {}

VirarParaEsquerdaValorInferior.prototype.Jogar = function(pedra) {
	switch (pedra.sprite.rotacaoSprite) {
        case RotacaoSprite.NaoRotacionar: 
            return new VirarParaEsquerdaEmPedraZeroValorInferior().Jogar(pedra);
        case RotacaoSprite.Noventa:
            return new VirarParaEsquerdaEmPedraNoventaValorInferior().Jogar(pedra);
        case RotacaoSprite.CentoEOitenta:
            return new VirarParaEsquerdaEmPedraCentoEOitentaValorInferior().Jogar(pedra);
    }
}
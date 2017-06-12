var VirarParaBaixoValorInferior = function() {}

VirarParaBaixoValorInferior.prototype.Jogar = function(pedra) {
	switch (pedra.sprite.rotacaoSprite) {
        case RotacaoSprite.NaoRotacionar: 
            return new VirarParaBaixoEmPedraZeroValorInferior().Jogar(pedra);
        case RotacaoSprite.Noventa:
            return new VirarParaBaixoEmPedraNoventaValorInferior().Jogar(pedra);
        case RotacaoSprite.DuzentosESetenta:
            return new VirarParaBaixoEmPedraDuzentosESetentaValorInferior().Jogar(pedra);
    }
}
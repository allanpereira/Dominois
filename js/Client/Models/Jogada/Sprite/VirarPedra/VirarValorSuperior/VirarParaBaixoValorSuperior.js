var VirarParaBaixoValorSuperior = function() {}

VirarParaBaixoValorSuperior.prototype.Jogar = function(pedra) {
	switch (pedra.sprite.rotacaoSprite) {
        case RotacaoSprite.NaoRotacionar: 
            return new VirarParaBaixoEmPedraZeroValorSuperior().Jogar(pedra);
        case RotacaoSprite.Noventa:
            return new VirarParaBaixoEmPedraNoventaValorSuperior().Jogar(pedra);
        case RotacaoSprite.DuzentosESetenta:
            return new VirarParaBaixoEmPedraDuzentosESetentaValorSuperior().Jogar(pedra);
    }
}

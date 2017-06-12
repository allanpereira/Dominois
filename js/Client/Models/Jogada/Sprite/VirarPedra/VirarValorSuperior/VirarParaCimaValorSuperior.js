var VirarParaCimaValorSuperior = function() {}

VirarParaCimaValorSuperior.prototype.Jogar = function(pedra) {
	switch (pedra.sprite.rotacaoSprite) {
        case RotacaoSprite.NaoRotacionar: 
            return new VirarParaCimaEmPedraZeroValorSuperior().Jogar(pedra);
        case RotacaoSprite.Noventa:
            return new VirarParaBaixoEmPedraNoventaValorSuperior().Jogar(pedra);
        case RotacaoSprite.DuzentosESetenta:
            return new VirarParaCimaEmPedraDuzentosESetentaValorSuperior().Jogar(pedra);
    }
}

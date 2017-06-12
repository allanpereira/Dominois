var VirarParaEsquerdaValorSuperior = function() {}

VirarParaEsquerdaValorSuperior.prototype.Jogar = function(ladoPedra, pedra) {
	switch (pedra.sprite.rotacaoSprite) {
        case RotacaoSprite.NaoRotacionar: 
            return new VirarParaEsquerdaEmPedraZeroValorSuperior().Jogar(pedra);
        case RotacaoSprite.Noventa:
            return new VirarParaEsquerdaEmPedraNoventaValorSuperior().Jogar(pedra);
        case RotacaoSprite.CentoEOitenta:
            return new VirarParaEsquerdaEmPedraCentoEOitentaValorSuperior().Jogar(pedra);
    }
}
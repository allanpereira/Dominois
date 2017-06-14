var VirarParaDireitaValorSuperior = function() {}

VirarParaDireitaValorSuperior.prototype.Jogar = function(pedra) {
	switch (pedra.sprite.rotacaoSprite) {
        case RotacaoSprite.NaoRotacionar: 
            return new VirarParaDireitaEmPedraZeroValorSuperior().Jogar(pedra);
        case RotacaoSprite.Noventa:
            return new VirarParaDireitaEmPedraNoventaValorSuperior().Jogar(pedra);
        case RotacaoSprite.CentoEOitenta:
            return new VirarParaDireitaEmPedraCentoEOitentaValorSuperior().Jogar(pedra);
    }
}

var JogarDeitadaParaEsquerda = function() {}

JogarDeitadaParaEsquerda.prototype.Jogar = function(pedra) {
    switch (pedra.sprite.rotacaoSprite) {
        case RotacaoSprite.Noventa:
            return new JogarEmPedraNoventaDeitadaParaEsquerda().Jogar(pedra);
        case RotacaoSprite.DuzentosESetenta:
            return new JogarEmPedraDuzentosESetentaDeitadaParaEsquerda().Jogar(pedra);
    }
}

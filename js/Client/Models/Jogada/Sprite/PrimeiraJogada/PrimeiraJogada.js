var PrimeiraJogada = function() {
    this.posicaoPedraInicial = { x: 330, y: 220 };
}

PrimeiraJogada.prototype.Jogar = function(ladoPedra) {
    switch (ladoPedra) {
        case LadoPedra.Deitada:
            return new JogadaSprite(this.posicaoPedraInicial.x, this.posicaoPedraInicial.y, RotacaoSprite.NaoRotacionar);            
        case LadoPedra.Superior:
            return new JogadaSprite(this.posicaoPedraInicial.x, this.posicaoPedraInicial.y, RotacaoSprite.Noventa);
        case LadoPedra.Inferior:
            return new JogadaSprite(this.posicaoPedraInicial.x, this.posicaoPedraInicial.y, RotacaoSprite.DuzentosESetenta);
    }
}
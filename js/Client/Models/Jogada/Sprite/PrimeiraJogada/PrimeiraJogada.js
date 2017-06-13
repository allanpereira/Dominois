var PrimeiraJogada = function() {
    this.posicaoPedraInicial = { x: 330, y: 250 };
}

PrimeiraJogada.prototype.Jogar = function(ladoPedra) {
    if (ladoPedra == LadoPedra.Deitada) {
        return new JogadaSprite(this.posicaoPedraInicial.x, this.posicaoPedraInicial.y, RotacaoSprite.NaoRotacionar);            
    } else {
        return new JogadaSprite(this.posicaoPedraInicial.x, this.posicaoPedraInicial.y, RotacaoSprite.DuzentosESetenta);
    }
}

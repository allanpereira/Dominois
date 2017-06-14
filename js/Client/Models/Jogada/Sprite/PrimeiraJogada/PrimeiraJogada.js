var PrimeiraJogada = function() {
    this.posicaoPedraInicialEmPe = { x: 340, y: 300 };
    this.posicaoPedraInicialDeitada = { x: 330, y: 230 };
}

PrimeiraJogada.prototype.Jogar = function(ladoPedra) {
    if (ladoPedra == LadoPedra.Deitada) {
        return new JogadaSprite(this.posicaoPedraInicialDeitada.x, this.posicaoPedraInicialDeitada.y, RotacaoSprite.NaoRotacionar);            
    } else {
        return new JogadaSprite(this.posicaoPedraInicialEmPe.x, this.posicaoPedraInicialEmPe.y, RotacaoSprite.DuzentosESetenta);
    }
}

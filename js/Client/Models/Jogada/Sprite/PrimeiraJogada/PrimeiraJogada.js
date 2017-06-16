var PrimeiraJogada = function() {
    this.posicaoPedraInicialEmPe = { x: 340, y: 300 };
    this.posicaoPedraInicialDeitada = { x: 330, y: 230 };
}

PrimeiraJogada.prototype.Jogar = function(centroMesa, ladoPedra) {
    if (ladoPedra == LadoPedra.Deitada) {
        var x = centroMesa.x - (this.posicaoPedraInicialDeitada.x/2.5);
        var y = centroMesa.y - (this.posicaoPedraInicialDeitada.y);
        return new JogadaSprite(x, y, RotacaoSprite.NaoRotacionar);            
    } else {
        var x = centroMesa.x - (this.posicaoPedraInicialEmPe.x/2);
        var y = centroMesa.y - (this.posicaoPedraInicialEmPe.y/2);
        return new JogadaSprite(x, y, RotacaoSprite.DuzentosESetenta);
    }
}

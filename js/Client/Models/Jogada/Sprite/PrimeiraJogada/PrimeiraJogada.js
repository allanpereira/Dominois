var PrimeiraJogada = function() {}

PrimeiraJogada.prototype.Jogar = function(centroMesa, ladoPedra) {
    debugger;
    if (ladoPedra == LadoPedra.Deitada) {
        return new JogadaSprite(centroMesa.x, centroMesa.y, RotacaoSprite.NaoRotacionar);            
    } else {
        return new JogadaSprite(centroMesa.x, centroMesa.y, RotacaoSprite.DuzentosESetenta);
    }
}
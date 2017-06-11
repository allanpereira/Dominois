var PrimeiraJogada = function() {}

PrimeiraJogada.prototype.Jogar = function(pedra) {
    if (pedra.valorSuperior == pedra.valorInferior) {
        return new JogadaMesa(ladoPedra.Deitada, null, null);
    } else {
        return new JogadaMesa(ladoPedra.Superior, null, null);
    }
}
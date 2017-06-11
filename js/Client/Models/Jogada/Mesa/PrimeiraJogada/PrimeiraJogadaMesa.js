var PrimeiraJogadaMesa = function() {}

PrimeiraJogadaMesa.prototype.Jogar = function(pedra) {
    if (pedra.valorSuperior == pedra.valorInferior) {
        return new JogadaMesa(LadoPedra.Deitada, null, null);
    } else {
        return new JogadaMesa(LadoPedra.Superior, null, null);
    }
}
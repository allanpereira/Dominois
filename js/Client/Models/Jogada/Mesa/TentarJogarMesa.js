var TentarJogarMesa = function() {}

TentarJogarMesa.prototype.Jogar = function(pedra, pedraAnterior, mesa, moveType) {
    if (MoveType.LeftSide == moveType)
        return new TentarJogarNaEsquerdaMesa().Jogar(pedra, pedraAnterior, mesa.valorPonta.esquerda);

    if (MoveType.RightSide == moveType)
        return new TentarJogarNaDireitaMesa().Jogar(pedra, pedraAnterior, mesa.valorPonta.direita);
}

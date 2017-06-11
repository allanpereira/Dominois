var TentarJogarMesa = function() {}

TentarJogarMesa.prototype.Jogar = function(pedra, mesa, moveType) {
    if (MoveType.LeftSide == moveType)
        return new TentarJogarNaEsquerdaMesa().Jogar(pedra, mesa.valorPonta.esquerda);

    if (MoveType.RightSide == moveType)
        return new TentarJogarNaDireitaMesa().Jogar(pedra, mesa.valorPonta.direita);
}

var MetodoSpriteMesa = function(jogada) {
    
    if (jogada.moveType == MoveType.FirstDomino) {
        jogada.MetodoSpriteMesa = jogada.mesa.sprite.JogarPrimeiraPedra;
        return jogada;
    }
    
    if (jogada.moveType == MoveType.LeftSide) {
        jogada.MetodoSpriteMesa = jogada.mesa.sprite.JogarPedraEsquerda;
        return jogada;
    }
    
    if (jogada.moveType == MoveType.RightSide) {
        jogada.MetodoSpriteMesa = jogada.mesa.sprite.JogarPedraDireita;
        return jogada;
    }
    
    return jogada;
}
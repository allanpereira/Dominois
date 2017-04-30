var ValoresMesa = function(jogada) {

    if (jogada.moveType == MoveType.FirstDomino) {
        jogada.valorEsquerdaMesa = jogada.pedra.valorSuperior;
        jogada.valorDireitaMesa = jogada.pedra.valorInferior;
        return jogada;
    }
    
    var propriedadeJogada = "";
    var propripedadeMesa = "";
    
    if (jogada.moveType == MoveType.LeftSide) {
        propriedadeJogada = "valorEsquerdaMesa";
        propripedadeMesa = "valorEsquerda";
    }
    
    if (jogada.moveType == MoveType.RightSide) {
        propriedadeJogada = "valorDireitaMesa";
        propripedadeMesa = "valorDireita";
    }
    
    jogada[propriedadeJogada] = jogada.pedra.valorSuperior != jogada.mesa[propripedadeMesa]? jogada.pedra.valorSuperior: jogada.pedra.valorInferior;	
    return jogada;
}
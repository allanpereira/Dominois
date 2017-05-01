// Require Helper/RotacaoSprite

var RotacaoPedra = function(jogada) {

    if (jogada.pedra.temValoresIguais) {
        jogada.rotacaoSprite = RotacaoSprite.naoRotacionar;
        return jogada;
    }
    
    if (jogada.moveType == MoveType.LeftSide) {
        if (jogada.mesa.valorEsquerda == jogada.pedra.valorSuperior) {
            jogada.rotacaoSprite = RotacaoSprite.direita;
            return jogada;
        }
        
        if (jogada.mesa.valorEsquerda == jogada.pedra.valorInferior) {
            jogada.rotacaoSprite = RotacaoSprite.esquerda;
            return jogada;
        }
    }
    
    if (jogada.moveType == MoveType.RightSide) {
        if (jogada.mesa.valorDireita == jogada.pedra.valorSuperior) {
            jogada.rotacaoSprite = RotacaoSprite.esquerda;
            return jogada;
        }
        
        if (jogada.mesa.valorDireita == jogada.pedra.valorInferior) {
            jogada.rotacaoSprite = RotacaoSprite.direita;
            return jogada;
        }
    }
    
    jogada.rotacaoSprite = RotacaoSprite.esquerda;
    return jogada;
}
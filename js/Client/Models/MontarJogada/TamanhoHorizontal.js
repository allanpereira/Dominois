var TamanhoHorizontal = function(jogada) {
    
    // TODO: Ver pq a distancia de jogada fica tão grande usando o tamanho da pedra
    
    if (jogada.rotacaoSprite == RotacaoSprite.naoRotacionar) {
        jogada.tamanhoHorizontal = 10;
    } else {
        jogada.tamanhoHorizontal = 30;
    }
    
    return jogada;
}
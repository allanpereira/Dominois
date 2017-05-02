var TamanhoHorizontal = function(jogada) {
    
    // TODO: Ver pq a distancia de jogada fica tão grande usando o tamanho da pedra
    
    if (jogada.rotacaoSprite == RotacaoSprite.naoRotacionar) {
        jogada.tamanhoHorizontal = jogada.pedra.sprite.largura;
    } else {
        jogada.tamanhoHorizontal = jogada.pedra.sprite.altura;
    }
    
    return jogada;
}
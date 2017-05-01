var Jogada = function(jogada) {
    this.pedra = jogada.pedra;
    this.mesa = jogada.mesa;
    this.moveType = jogada.moveType;
    
    this.valorEsquerdaMesa = jogada.valorEsquerdaMesa;
    this.valorDireitaMesa = jogada.valorDireitaMesa;
    this.tamanhoHorizontal = jogada.tamanhoHorizontal;
    this.rotacaoSprite = jogada.rotacaoSprite;
    
    this.MetodoMesa = jogada.MetodoMesa;
    this.MetodoSpriteMesa = jogada.MetodoSpriteMesa;
}

Jogada.prototype.EfetuarJogada = function() {
    this.MetodoMesa(this);
    this.MetodoSpriteMesa(this);
}
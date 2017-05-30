// Require SpriteMesa
// Require Jogada
// Require MontarJogada/*

var Mesa = function() {
    this.sprite = new SpriteMesa();
    
    this.pedrasJogadas = [];
    this.valorEsquerda;
    this.valorDireita;
}

Mesa.prototype.VerificarMovimentosPossiveisParaPedra = function(pedra) {
    
    var movimentosPossiveis = [];
 
    if (this.pedrasJogadas.length == 0) {
        movimentosPossiveis.push(MoveType.FirstDomino);
        return movimentosPossiveis;
    }
    
    if ((pedra.valorSuperior == this.valorEsquerda) ||
        (pedra.valorInferior == this.valorEsquerda)) {
            movimentosPossiveis.push(MoveType.LeftSide);
    }
    
    if ((pedra.valorSuperior == this.valorDireita) ||
        (pedra.valorInferior == this.valorDireita)) {
            movimentosPossiveis.push(MoveType.RightSide);
    }

    return movimentosPossiveis;
}

Mesa.prototype.JogarPedra = function(pedra, moveType) {

    var baseJogada = {pedra: pedra, moveType: moveType, mesa: this };
    var jogada = new Jogada(MetodoSpriteMesa(MetodoMesa(TamanhoHorizontal(DesvioSprite(RotacaoPedra(ValoresMesa(baseJogada)))))));
    
    var posini ={x:pedra.sprite.phaserSprite.x,y:pedra.sprite.phaserSprite.y};//variável temporária apenas para testar a animação.
   
    jogada.EfetuarJogada();

    jogada.AniMove(pedra,posini,null,1);//estou chamando depois do EfetuarJogada pois, assim, o sprite fica com a posição final e passo a posição inicial guardado na variável posini
}
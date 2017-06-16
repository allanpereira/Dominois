// Require SpriteMesa
// Require Jogada
// Require MontarJogada/*

var Mesa = function() {
    this.sprite = new SpriteMesa();
    
    this.valorPonta = {
		esquerda: null,
		direita: null
	}

    this.pedras = {
        esquerda: [],
        direita: [],
    }
}

Mesa.prototype.VerificarMovimentosPossiveisParaPedra = function(pedra) {    
    var movimentosPossiveis = [];
 
    if (this.pedras.esquerda.length == 0) {
        movimentosPossiveis.push(MoveType.FirstDomino);
        return movimentosPossiveis;
    }
    
    if ((pedra.valorSuperior == this.valorPonta.esquerda) ||
        (pedra.valorInferior == this.valorPonta.esquerda)) {
            movimentosPossiveis.push(MoveType.LeftSide);
    }
    
    if ((pedra.valorSuperior == this.valorPonta.direita) ||
        (pedra.valorInferior == this.valorPonta.direita)) {
            movimentosPossiveis.push(MoveType.RightSide);
    }

    return movimentosPossiveis;
}

Mesa.prototype.JogarPedra = function(pedra, moveType) {
    var jogadaMesa;
	
	switch (moveType) {
		case MoveType.FirstDomino:
			jogadaMesa = new PrimeiraJogadaMesa().Jogar(pedra);
			this.valorPonta.esquerda = pedra.valorSuperior;
			this.valorPonta.direita = pedra.valorInferior;
			this.pedras.esquerda.push(pedra);
			this.pedras.direita.push(pedra);
			break;
		case MoveType.LeftSide:
			jogadaMesa = new TentarJogarNaEsquerdaMesa().Jogar(pedra, this.pedras.esquerda[this.pedras.esquerda.length - 1], this.valorPonta.esquerda);
			this.valorPonta.esquerda = jogadaMesa.valorPonta;
			this.pedras.esquerda.push(pedra);
			break;
		case MoveType.RightSide:
			jogadaMesa = new TentarJogarNaDireitaMesa().Jogar(pedra, this.pedras.direita[this.pedras.direita.length - 1] ,this.valorPonta.direita);
			this.valorPonta.direita = jogadaMesa.valorPonta;
			this.pedras.direita.push(pedra);
			break;
	}
    
    this.sprite.Jogar(moveType, jogadaMesa.ladoPedra, pedra, jogadaMesa.pedraAnterior, this);

    pedra.sprite.AnimarMovimento(this.sprite.posicao, null, 1);
}

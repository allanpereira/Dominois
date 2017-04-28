// Require SpriteMesa

var Mesa = function() {
	this.sprite = new SpriteMesa();
	
	this.pedrasJogadas = [];
	this.valorSuperior;
	this.valorInferior;
}

Mesa.prototype.VerificarMovimentosPossiveisParaPedra(pedra) {
	var movimentosPossiveis = [];
	
	if (this.pedras.length == 0) {
		movimentosPossiveis.push(MoveType.FirstDomino);
		return movimentosPossiveis;
	}
	
	if ((pedra.valorSuperior == this.valorSuperior) ||
		(pedra.valorSuperior == this.valorInferior)) {
			movimentosPossiveis.push(MoveType.RightSide);
	}
	
	if ((pedra.valorInferior == this.valorSuperior) ||
		(pedra.valorInferior == this.valorInferior)) {
			movimentosPossiveis.push(MoveType.LeftSide);
	}
	
	return movimentosPossiveis;
}

Mesa.prototype.JogarPedra(pedra, moveType) {
	var ladoMesa = "";
	this.pedrasJogadas.push(pedra);
	if (moveType == MoveType.FirstDomino) {
		
	}
}
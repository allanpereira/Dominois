var Pedra = function(nome, valorSuperior, valorInferior, sprite) {
    this.nome = nome;
    this.valorSuperior = valorSuperior;
    this.valorInferior = valorInferior;	
    this.sprite = sprite;
	this.temValoresIguais = this.valorSuperior == this.valorInferior;
}

Pedra.prototype.AoReceberClique = function(mesa, callback) {
	movimentos = mesa.VerificarMovimentosPossiveisParaPedra(this);
	
	// TODO: Se não houver movimento disponível bloquear de alguma forma
	// TODO: Se houver mais de um movimento disponível deixar usuário escolher
	var moveType = movimentos[0];
	
	if (moveType == MoveType.NoMove) {
		alert("Não existe jogada possível para essa pedra");
		return;
	}
	
	callback(this, moveType);
}
var Pedra = function(nome, valorSuperior, valorInferior, sprite) {
    this.nome = nome;
    this.valorSuperior = valorSuperior;
    this.valorInferior = valorInferior;	
    this.sprite = sprite;
}

Pedra.prototype.AoReceberClique = function(callback) {
	moveType = MoveType.FirtDomino;
	//console.log(callback);
	callback(this, moveType);
}
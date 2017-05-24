var Pedra = function(nome, valorSuperior, valorInferior, sprite) {
    this.nome = nome;
    this.valorSuperior = valorSuperior;
    this.valorInferior = valorInferior;	
    this.sprite = sprite;
    this.temValoresIguais = this.valorSuperior == this.valorInferior;
}
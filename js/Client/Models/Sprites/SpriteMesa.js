var SpriteMesa = function() {
    this.nome = "mesa";
    
    this.posicao = {
        x: 50,
        y: 50
    };
    
    this.tamanho = {
        altura: 500,
        largura: 700
    };
	
	this.posicaoPedraInicial = { x: 10, y: 10 };
	this.proximaPedraSuperior = this.posicaoPedraInicial;
	this.proximaPedraInferior = this.posicaoPedraInicial;
};

SpriteMesa.prototype.JogarPrimeiraPedra = function(pedra) {
	this.JogarPedraSuperior(pedra);
	this.JogarPedraInferior(pedra);
}

SpriteMesa.prototype.JogarPedraSuperior = function(pedra) {
	
}

SpriteMesa.prototype.JogarPedraInferior = function(pedra) {
	
}
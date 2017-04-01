var MaoPrincipal = function() {
	var self = this;
	
	this.posicaoInicial = {
		x: 20,
		y: 20
	}
	
	this.posicaoProximaPedra = this.posicaoInicial;
	
	this.AdicionarPedra = function(pedra) {
		self.posicaoProximaPedra.x = pedra.sprite.largura;
	}
}
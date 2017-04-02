var MaoPrincipal = function() {
	var self = this;
	
	this.posicaoInicial = {
		x: 162,
		y: 450
	}
	
	this.posicaoProximaPedra = this.posicaoInicial;
	
	this.AdicionarPedra = function(pedra) {
		self.posicaoProximaPedra.x =  self.posicaoProximaPedra.x + pedra.sprite.largura;
	}
}
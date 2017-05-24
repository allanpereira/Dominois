var TornarCompraClicavel = function() {}

TornarPedraClicavel.prototype.Tornar = function(spriteComprar, liberarCompraPedra) {
	
	if (liberarCompraPedra) {
		return new LiberarCompraDePedra().Tornar(spriteComprar);
	}
	
	return new BloquearCompraDePedra().Tornar(spriteComprar);
}
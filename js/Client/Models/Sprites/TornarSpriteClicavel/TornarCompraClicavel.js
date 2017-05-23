var TornarCompraClicavel = function() {}

TornarPedraClicavel.prototype.Tornar = function(jogo, spriteComprar, liberarCompraPedra) {
	
	if (liberarCompraPedra) {
		return new LiberarCompraDePedra().Tornar(jogo, spriteComprar);
	}
	
	return new BloquearCompraDePedra().Tornar(spriteComprar);
}

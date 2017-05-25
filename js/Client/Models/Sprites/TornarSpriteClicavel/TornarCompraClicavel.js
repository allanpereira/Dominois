var TornarCompraClicavel = function() {}

TornarCompraClicavel.prototype.Tornar = function(jogo, spriteComprar, liberarCompraPedra) {

	if (liberarCompraPedra) {
		return new LiberarCompraDePedra().Tornar(jogo, spriteComprar);
	}
	
	return new BloquearCompraDePedra().Tornar(spriteComprar);
}

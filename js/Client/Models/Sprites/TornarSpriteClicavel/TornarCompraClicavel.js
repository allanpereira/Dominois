var TornarCompraClicavel = function() {}

TornarCompraClicavel.prototype.Tornar = function(jogo, spriteComprar, jogadorPossuiPedra, quantidadePedrasComprar) {

	if (!jogadorPossuiPedra) {
		return new BloquearCompraDePedra().Tornar(spriteComprar);
	}

	if (quantidadePedrasComprar == 0) {
		return new LiberarPassagemDeVez().Tornar(jogo, spriteComprar);
	}

	return new LiberarCompraDePedra().Tornar(jogo, spriteComprar);
}

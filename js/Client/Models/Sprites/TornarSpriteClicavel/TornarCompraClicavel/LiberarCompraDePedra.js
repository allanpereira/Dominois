var LiberarCompraDePedra = function() {}

LiberarCompraDePedra.prototype.Tornar = function(jogo, spriteComprar) {
	
	var Callback = function() {
		jogo.socketClient.comprarPedra(jogo.gameId);
	}
	
	return new TornarSpriteClicavel().Tornar(spriteComprar.phaserSprite, Callback);
}
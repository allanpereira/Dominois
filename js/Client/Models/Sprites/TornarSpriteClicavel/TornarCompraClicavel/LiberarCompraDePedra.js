var BloquearComprarDePedra = function() {}

BloquearComprarDePedra.prototype.Tornar = function(jogo, spriteComprar) {
	
	var Callback = function() {
		jogo.socketClient.comprarPedra(jogo.gameId);
	}
	
	return new TornarSpriteClicavel().Tonar(spriteComprar.phaserSprite, Callback);
}
var LiberarPassagemDeVez = function() {}

LiberarPassagemDeVez.prototype.Tornar = function(jogo, spritePassar) {
	
	var Callback = function() {
		jogo.socketClient.PassarAVez(jogo.gameId);
	}
	
	return new TornarSpriteClicavel().Tornar(spritePassar.phaserSprite, Callback);
}
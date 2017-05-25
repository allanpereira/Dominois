var JogarEmUnicaOpcaoClick = function() {}

JogarEmUnicaOpcaoClick.prototype.Tornar = function(jogo, pedra, opcoesJogada) {
	
	var Callback = function() {
		jogo.JogarPedra(pedra, opcoesJogada[0]);
	}
	
	return new TornarSpriteClicavel().Tornar(pedra.sprite.phaserSprite, Callback);
}
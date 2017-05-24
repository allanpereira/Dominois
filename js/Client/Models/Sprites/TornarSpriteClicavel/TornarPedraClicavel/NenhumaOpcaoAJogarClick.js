var NenhumaOpcaoAJogarClick = function() {}

NenhumaOpcaoAJogarClick.prototype.Tornar(pedra) {
	
	var Callback = function() {
		alert("Não existe jogada possível para essa pedra");
	}
	
	return new TornarSpriteClicavel().Tornar(pedra.sprite.phaserSprite, Callback);
}
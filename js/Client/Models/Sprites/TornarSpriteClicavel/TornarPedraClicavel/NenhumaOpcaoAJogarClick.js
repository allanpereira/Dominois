var NenhumaOpcaoAJogarClick = function() {}

NenhumaOpcaoAJogarClick.prototype.Tornar = function(pedra) {
	
	var Callback = function() {
		$("#naoExisteJogadaPossivel").modal("show");
	}
	
	return new TornarSpriteClicavel().Tornar(pedra.sprite.phaserSprite, Callback);
}
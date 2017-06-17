var BloquearCompraDePedra = function() {}

BloquearCompraDePedra.prototype.Tornar = function(spriteComprar) {
	
	var Callback = function() {
		$("#pedrasDisponiveis").modal("show");
	}
	
	return new TornarSpriteClicavel().Tornar(spriteComprar.phaserSprite, Callback);
}
var BloquearCompraDePedra = function() {}

BloquearCompraDePedra.prototype.Tornar = function(spriteComprar) {
	
	var Callback = function() {
		alert("Você possui pedras disponíveis para jogar.");
	}
	
	return new TornarSpriteClicavel().Tornar(spriteComprar.phaserSprite, Callback);
}
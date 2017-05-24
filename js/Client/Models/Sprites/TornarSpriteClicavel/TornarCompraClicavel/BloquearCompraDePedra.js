var BloquearComprarDePedra = function() {}

BloquearComprarDePedra.prototype.Tornar = function(spriteComprar) {
	
	var Callback = function() {
		alert("Você possui pedras disponíveis para jogar.");
	}
	
	return new TornarSpriteClicavel().Tonar(spriteComprar.phaserSprite, Callback);
}
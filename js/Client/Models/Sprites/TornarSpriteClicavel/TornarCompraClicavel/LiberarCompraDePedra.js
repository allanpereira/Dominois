var BloquearComprarDePedra = function() {}

BloquearComprarDePedra.prototype.Tornar = function(spriteComprar) {
	
	var Callback = function() {
		alert("TODO: Liberar a compra de pedra");
	}
	
	return new TornarSpriteClicavel().Tonar(spriteComprar.phaserSprite, Callback);
}
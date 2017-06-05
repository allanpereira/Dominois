var BloquearPassagemDeVez = function() {}

BloquearPassagemDeVez.prototype.Tornar = function(spritePassar) {
	
	var Callback = function() {
		alert("Você ainda possui jogadas disponíveis!");
	}
	
	return new TornarSpriteClicavel().Tornar(spritePassar.phaserSprite, Callback);
}
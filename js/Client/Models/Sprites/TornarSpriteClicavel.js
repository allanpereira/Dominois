var TornarSpriteClicavel = function() {}

TornarSpriteClicavel.prototype.Tornar = function(sprite, Callback) {
	
	var CallbackAoClicar = function(sprite) {
		Callback();
	});

	sprite.inputEnabled = true;
    sprite.input.useHandCursor = true;
    sprite.events.onInputDown.add(CallbackAoClicar, this);
};


TornarSpriteClicavel.prototype.Remover = function(sprite) {
	sprite.eventos.onInputDown.removeAll();
}
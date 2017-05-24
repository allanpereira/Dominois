var TornarSpriteClicavel = function() {}
TornarSpriteClicavel.prototype.Tornar = function(sprite, Callback) {
    sprite.inputEnabled = true;
    sprite.input.useHandCursor = true;

    var callbackAoClicar = function(spriteClicado) {
        Callback(spriteClicado.data);
    }

    sprite.events.onInputDown.add(callbackAoClicar, this); 
}
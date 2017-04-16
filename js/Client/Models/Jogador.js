var Jogador = function(pedras) {
    this.pedras = pedras;
};

Jogador.prototype.ParaCadaPedra = function(callback) {
    for (var i = 0; i < this.pedras.length; i++) {
        callback(this.pedras[i]);
    }
};
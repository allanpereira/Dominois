var Mesa = function(pedras) {
    this.valorPedraSuperior = null;
    this.valorPedraInferior = null;
    this.jogadores = [];
    this.pedras = pedras;

    this.RemoverPedraDaMesa = function(posicaoPedra) {
        this.pedras.splice(posicaoPedra, 1);
    };
};

Mesa.prototype.ParaCadaPedraDisponivel = function(callback) {
    for (var i = 0; i < this.pedras.length; i ++){
        callback(this.pedras[i]);
    }
};

Mesa.prototype.AdicionarNovoJogador = function(jogador) {
    this.jogadores.push(jogador);
};

Mesa.prototype.DistribuirPedrasParaJogadores = function() {
    var self = this;
    self.jogadores.map(function(jogador) {
        var qtdePedrasNaMao = 7;
        var pedra = {};
        
        for (var i = 0; i < qtdePedrasNaMao; i++) {
            var pedra = self.PegarPedraAleatoria();
            jogador.pedras.push(pedra);
        }
    });
};
        
Mesa.prototype.PegarPedraAleatoria = function() {
    var posicaoPedra = Math.floor(Math.random() * this.pedras.length);
    var pedra = this.pedras[posicaoPedra];
    this.RemoverPedraDaMesa(posicaoPedra);
    return pedra;
};
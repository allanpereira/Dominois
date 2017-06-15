var AoEntrarNovoJogador = function() {}
AoEntrarNovoJogador.prototype.Disparar = function(jogo, data) {
    jogo.notificacao.NotificarEntradaJogador(data.player);
}
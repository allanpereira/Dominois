var AoSairJogador = function() {}
AoSairJogador.prototype.Disparar = function(jogo, data) {
    jogo.notificacao.NotificarSaidaJogador(data.player);
}
var AoIniciarJogo = function() {}
AoIniciarJogo.prototype.Disparar = function(jogo, data) {
    jogo.iniciado = true;
    jogo.notificacao.NotificarEstado(jogo);
}
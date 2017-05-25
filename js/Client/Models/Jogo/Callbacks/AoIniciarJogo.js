var AoIniciarJogo = function() {}
AoIniciarJogo.prototype.Disparar = function(jogo, data) {
    debugger;
    jogo.iniciado = true;
    jogo.notificacao.NotificarEstado(jogo);
}
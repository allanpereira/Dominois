var AoIniciarJogo = function() {}
AoIniciarJogo.prototype.Disparar = function(jogo, data) {
    jogo.iniciado = true;
    jogo.notificacao.NotificarEstado(jogo)
    if (!jogo.PodeJogar()) return;
    var turno = new Turno();
    turno.AnalisarPedrasJogador(jogo);
    turno.Iniciar(jogo);
}
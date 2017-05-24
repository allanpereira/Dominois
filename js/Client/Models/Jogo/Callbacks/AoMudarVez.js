var AoMudarVez = function() {}
AoMudarVez.prototype.Disparar = function(jogo, data) {
    jogo.AlterarTurno(data.turn);
    if (!jogo.PodeJogar()) return;
    jogo.notificacao.NotificarEstado(jogo);
    var turno = new Turno();
    turno.AnalisarPedrasJogador(jogo);
    turno.Iniciar(jogo);
}

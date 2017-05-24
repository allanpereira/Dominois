var AoMudarVez = function() {}
AoMudarVez.prototype.Disparar = function(jogo, data) {
    jogo.AlterarTurno(data.turn);
    jogo.notificacao.NotificarEstado(jogo);
}
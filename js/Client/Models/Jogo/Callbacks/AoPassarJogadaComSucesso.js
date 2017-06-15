var AoPassarJogadaComSucesso = function() {}
AoPassarJogadaComSucesso.prototype.Disparar = function(jogo, data) {
    jogo.AlterarTurno(data.turns);
    jogo.notificacao.NotificarEstado(jogo);
    if (!jogo.PodeJogar()) {
        new Turno().LimparEventos(jogo);
        return;
    }
    var turno = new Turno();
    turno.AnalisarPedrasJogador(jogo);
}
var AoRealizarJogadaComSucesso = function() {}
AoRealizarJogadaComSucesso.prototype.Disparar = function(jogo, data) {
    jogo.MoverPedraParaMesa(data.domino, data.moveType);
    jogo.AlterarTurno(data.turns);

    if (!jogo.PodeJogar()) {
        new Turno().LimparEventos(jogo);
        return;
    }

    jogo.notificacao.NotificarEstado(jogo);
    var turno = new Turno();
    turno.AnalisarPedrasJogador(jogo);
    turno.Iniciar(jogo);
}
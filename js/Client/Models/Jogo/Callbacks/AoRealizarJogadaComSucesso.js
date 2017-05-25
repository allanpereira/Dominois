var AoRealizarJogadaComSucesso = function() {}
AoRealizarJogadaComSucesso.prototype.Disparar = function(jogo, data) {
    jogo.MoverPedraParaMesa(data.domino, data.moveType);
    new Turno().LimparEventos(jogo);
    jogo.AlterarTurno(data.turn);
    jogo.notificacao.NotificarEstado(jogo);
}
var AoRealizarJogadaComSucesso = function() {}
AoRealizarJogadaComSucesso.prototype.Disparar = function(jogo, data) {
    debugger;

    jogo.MoverPedraParaMesa(data.domino, data.moveType);
    jogo.AlterarTurno(data.turns);

    jogo.notificacao.NotificarEstado(jogo, data.turns);
    if (!jogo.PodeJogar()) {
        new Turno().LimparEventos(jogo);
        return;
    }
    
    var turno = new Turno();
    turno.AnalisarPedrasJogador(jogo);
}
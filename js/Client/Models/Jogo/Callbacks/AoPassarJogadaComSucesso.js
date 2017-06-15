var AoPassarJogadaComSucesso = function() {}
AoPassarJogadaComSucesso.prototype.Disparar = function(jogo, data) {
    jogo.AlterarTurno(data.turns);
    jogo.tela.spriteQtdePedrasJogadores.AtualizarTexto(jogo, data.turns);

    jogo.notificacao.NotificarEstado(jogo, data.turns);
    
    if (!jogo.PodeJogar()) {
        new Turno().LimparEventos(jogo);
        return;
    }
    var turno = new Turno();
    turno.AnalisarPedrasJogador(jogo);
}
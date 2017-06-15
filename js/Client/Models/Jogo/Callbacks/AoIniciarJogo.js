var AoIniciarJogo = function() {}
AoIniciarJogo.prototype.Disparar = function(jogo, data) {
    jogo.iniciado = true;
    jogo.tela.spriteQtdePedrasJogadores.AtualizarTexto(jogo, data.turns);
    jogo.notificacao.NotificarEstado(jogo, data.turns);
    if (!jogo.PodeJogar()) return;
    var turno = new Turno();
    turno.AnalisarPedrasJogador(jogo);
}
var AoRegistrarEntrada = function() {}
AoRegistrarEntrada.prototype.Disparar = function(jogo, data) {
    jogo.RegistrarEntrada(data.player);
    // TODO: Remover esse cara
    new AoAlterarAreaDeCompra().Disparar(jogo, data);
    jogo.AlterarEstado(data.game.state);
    jogo.AlterarTurno(data.game.turn);
    jogo.notificacao.NotificarEstado(jogo);
}
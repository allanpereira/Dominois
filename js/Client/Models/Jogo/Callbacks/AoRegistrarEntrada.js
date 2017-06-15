var AoRegistrarEntrada = function() {}
AoRegistrarEntrada.prototype.Disparar = function(jogo, data) {

    jogo.RegistrarEntrada(data.player);

    new AoAlterarAreaDeCompra().Disparar(jogo, data);
    
    jogo.AlterarEstado(data.game.state);
    jogo.vez = data.game.turn;
    jogo.notificacao.NotificarEstado(jogo, data.turns);

    jogo.tela.spriteQtdePedrasJogadores.AtualizarTexto(jogo, data.turns);
}
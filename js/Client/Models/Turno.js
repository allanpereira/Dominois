var Turno = function() {

}

Turno.prototype.AnalisarPedrasJogador = function (jogo) {
    var possuiPedra = false;
    jogo.jogador.ParaCadaPedra(function(pedra) {
        var movimentos = jogo.tela.mesa.VerificarMovimentosPossiveisParaPedra(pedra);
        pedra.TornarSpriteClicavel(jogo, movimentos);
        possuiPedra = movimentos.length == 0;
    });
    jogo.tela.spriteComprar.TornarSpriteClicavel(jogo, possuiPedra);
}

Turno.prototype.Iniciar = function(jogo) {
    // TODO: Iniciar turno;
}

Turno.prototype.LimparEventos = function(jogo) {
    jogo.tela.spriteComprar.RemoverEventoClick();
    jogo.jogador.ParaCadaPedra(function(pedra) {
        pedra.RemoverEventoClick();
    });
}

Turno.prototype.Finalizar = function(jogo) {
    // TODO: Iniciar turno;
}

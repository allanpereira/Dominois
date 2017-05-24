var Turno = function() {

}

Turno.prototype.AnalisarPedrasJogador(jogo) {
    var possuiPedra = false;
    jogo.jogador.ParaCadaPedra(function(pedra) {
        var movimentos = jogo.tela.mesa.VerificarMovimentosPossiveisParaPedra(pedra);
	pedra.TornarSpriteClicavel(jogo, pedra, movimentos);
	possuiPedra = movimentos.length > 0;
    });
    jogo.tela.spriteComprar.TornarSpriteClicavel(jogo, possuiPedra);
}

Turno.prototype.Iniciar(jogo) {
    // TODO: Iniciar turno;
}

Turno.prototype.LimparEventos(jogo) {
    jogo.tela.spriteComprar.RemoverEventoClick();
    jogo.jogador.ParaCadaPedra(function(pedra) {
        pedra.RenoverEventoClick();
    }
}

Turno.prototype.Finalizar(jogo) {
    // TODO: Iniciar turno;
}

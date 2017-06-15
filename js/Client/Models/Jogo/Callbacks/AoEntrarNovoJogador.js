var AoEntrarNovoJogador = function() {}
AoEntrarNovoJogador.prototype.Disparar = function(jogo, data) {
    debugger;
    jogo.jogadores.push(new Jogador(data.id, data.name));
    jogo.notificacao.NotificarEntradaJogador(data.player);
}
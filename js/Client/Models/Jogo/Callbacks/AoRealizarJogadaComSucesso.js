var AoRealizarJogadaComSucesso = function() {}

AoRealizarJogadaComSucesso.prototype.Disparar = function(jogo, data) {
    jogo.MoverPedraParaMesa(data.domino, data.moveType);

	//delay para q a pedra possa finalizar o movimento antes da próxima ação
	 game.time.events.add(3000, function(){

        if(data.gamestate=="FINISHED"){
            new Turno().LimparEventos(jogo);
            jogo.FinalizarJogo (data);
            return;
        }
		jogo.AlterarTurno(data.turns);
        jogo.tela.spriteQtdePedrasJogadores.AtualizarTexto(jogo, data.turns);
        jogo.notificacao.NotificarEstado(jogo, data.turns);
        if (!jogo.PodeJogar()) {
            new Turno().LimparEventos(jogo);
            return;
        }
        
        var turno = new Turno();
        turno.AnalisarPedrasJogador(jogo);
    });
}
var AoRealizarJogadaComSucesso = function() {}

AoRealizarJogadaComSucesso.prototype.Disparar = function(jogo, data) {
    jogo.MoverPedraParaMesa(data.domino, data.moveType);

    //Delay para q a pedra possa finalizar o movimento antes da próxima ação
    game.time.events.add(3000, function(){
        var turno = new Turno();

        if(data.gamestate == "FINISHED"){
            turno.LimparEventos(jogo);
            jogo.FinalizarJogo(data);
            return;
        }
        
        jogo.AlterarTurno(data.turns);
        jogo.tela.spriteQtdePedrasJogadores.AtualizarTexto(jogo, data.turns);
        jogo.notificacao.NotificarEstado(jogo, data.turns);
        
        if (!jogo.PodeJogar()) {
            turno.LimparEventos(jogo);
            return;
        }
            
        turno.AnalisarPedrasJogador(jogo);
    });
}
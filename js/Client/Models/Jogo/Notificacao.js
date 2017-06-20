var Notificacao = function() {
    this.notificacaoFixa = null;
    toastr.options.preventDuplicates = true;
}

Notificacao.prototype.NotificarJogoIniciado = function(){
    toastr.success("O jogo começou!");
};
Notificacao.prototype.NotificarEntradaJogador = function(player){
    if (player == null)
        return;
    toastr.info(player.name + " entrou no jogo!");
};
Notificacao.prototype.NotificarSaidaJogador = function(player){    
    toastr.warning(player.name + " saiu do jogo!");
};

Notificacao.prototype.NotificarEstado = function(jogo, turns) {
    if(this.notificacaoFixa != null)
        this.notificacaoFixa.remove();

    var options = {timeOut: 0, extendedTimeOut: 0, tapToDismiss : false};
    if(jogo.iniciado && jogo.vez) {
        this.notificacaoFixa = toastr.success("Faça sua jogada.", "", options);
    } else {
        var content = "";

        if(jogo.iniciado){
            var jogador = "";
            for (var i = 0; i < turns.length; i++) {
                if (turns[i].turn) 
                    jogador = turns[i].name;
            }
            content = "Esperando o jogador ".concat(jogador).concat(" realizar jogada.");
        }else{
            content = "Esperando outros jogadores para iniciar o jogo...";
        }

        this.notificacaoFixa = toastr.warning(content, "", options);
    }
};
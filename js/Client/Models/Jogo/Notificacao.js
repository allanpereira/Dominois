var Notificacao = function() {
    this.notificacaoFixa = null;
}

Notificacao.prototype.NotificarJogoIniciado = function(){
    toastr.success("O jogo começou!");
};
Notificacao.prototype.NotificarEntradaJogador = function(player){
    toastr.info(player.name + " entrou no jogo!");
};
Notificacao.prototype.NotificarSaidaJogador = function(player){
    toastr.warning(player.name + " saiu do jogo!");
};

Notificacao.prototype.NotificarEstado = function(jogo) {
    if(this.notificacaoFixa != null)
        this.notificacaoFixa.remove();

    var options = {timeOut: 0, extendedTimeOut: 0, tapToDismiss : false};
    if(jogo.iniciado && jogo.vez){
        this.notificacaoFixa = toastr.success("Faça sua jogada.", "", options);
    }else if(jogo.iniciado){
        this.notificacaoFixa = toastr.warning("Esperando outro jogador realizar jogada.", "", options);
    }else{
        this.notificacaoFixa = toastr.warning("Esperando outros jogadores para iniciar o jogo...", "", options);
    }
};

Notificacao.prototype.Configurar = function() {
    toastr.options.preventDuplicates = true;
    return this;
}
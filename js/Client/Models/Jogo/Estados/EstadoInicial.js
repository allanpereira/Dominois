var EstadoInicial = function(jogo) {
    this.nome = "Start";

    this.init = function(){
        game.stage.disableVisibilityChange = true;
    }

    this.create = function(){
        console.log("[JOGO] Criando o estado inicial do jogo...");
        game.stage.backgroundColor = jogo.tela.backgroundColor;
        jogo.AoCriarEstadoInicial();
    }
}
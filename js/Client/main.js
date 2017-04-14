// Require Game

var jogo = new Jogo();

var game = new Phaser.Game(
    jogo.ObterLarguraTela(),
    jogo.ObterAlturaTela(), 
    Phaser.AUTO, 
    jogo.tela.containerId
);


console.log("[MAIN] Jogo criado, dando start...");
game.state.add('Start', jogo.ObterEstadoInicial());
game.state.add('Game', jogo.ObterEstadoPrincipal());
game.state.start('Start');
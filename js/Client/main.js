// Require Game

var jogo = new Jogo();

var game = new Phaser.Game(
    jogo.ObterLarguraTela(),
    jogo.ObterAlturaTela(), 
    Phaser.AUTO, 
    jogo.tela.containerId
);


game.state.add('Game', jogo.ObterEstadoPrincipal());
console.log("main: Jogo criado, dando start");
game.state.start('Game');
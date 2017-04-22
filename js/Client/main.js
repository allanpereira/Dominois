// Require Game

var url = window.location.href;
if(url.endsWith("/"))
    url = url.substr(0, url.length - 1);

var gameId = url.substr(url.lastIndexOf("/") + 1);
var jogo = new Jogo(gameId);

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
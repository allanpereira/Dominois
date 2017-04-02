// Require Game

var game = new Phaser.Game(
				Game.tela.tamanho.largura, Game.tela.tamanho.altura, 
				Game.tela.tipoRenderização, Game.tela.tagHtmlContainer);
				
game.state.add('Game', Game);

console.log("main: Jogo criado, dando start");

game.state.start('Game');
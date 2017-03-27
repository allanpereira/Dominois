// Require Game

var configuracoesJogo = {
	larguraJanela: 800,
	alturaJanela: 600,
	tipoRenderizacao: Phaser.AUTO,
	tagHtmlContainer: document.getElementById('game')
}

var game = new Phaser.Game(
				configuracoesJogo.larguraJanela, configuracoesJogo.alturaJanela, 
				configuracoesJogo.tipoRenderização, configuracoesJogo.tagHtmlContainer);
				
game.state.add('Game', Game);
game.state.start('Game');
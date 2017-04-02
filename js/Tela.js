var Tela = function(spriteMesa, maoPrincipal) {
	var self = this;
	
	this.tamanho = {
		altura: 600,
		largura: 800
	}	
	
	this.tipoRenderizacao = Phaser.AUTO;
	this.tagHtmlContainer = document.getElementById('game');
	this.backgroundColor = "#FFF";
	
	this.spriteMesa = spriteMesa;	
	this.maoPrincipal = maoPrincipal;
}
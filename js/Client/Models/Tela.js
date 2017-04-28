var Tela = function(spriteMesa, maoPrincipal, spriteComprar) {
    this.tamanho = {
        largura : 800,
        altura : 600
    };
    
    this.containerId = 'game';
    this.backgroundColor = "#FFF";
    
    this.spriteMesa = spriteMesa;	
    this.maoPrincipal = maoPrincipal;
    this.spriteComprar = spriteComprar;
};
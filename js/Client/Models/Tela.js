var Tela = function(mesa, maoPrincipal) {
    this.tamanho = {
        largura : 800,
        altura : 600
    };
    
    this.containerId = 'game';
    this.backgroundColor = "#FFF";
    
    this.mesa = mesa;	
    this.maoPrincipal = maoPrincipal;
};
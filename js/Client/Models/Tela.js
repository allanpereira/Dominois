var Tela = function(mesa, maoPrincipal, spriteComprar, spriteQtdePedrasJogadores) {
    this.tamanho = {
        largura : 1100,
        altura : 680
    }
    
    this.containerId = 'game';
    this.backgroundColor = "#FFF";
    
    this.mesa = mesa;	
    this.maoPrincipal = maoPrincipal;
    this.spriteComprar = spriteComprar;
    this.spriteQtdePedrasJogadores = spriteQtdePedrasJogadores;
};
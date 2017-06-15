var Tela = function(mesa, maoPrincipal, spriteComprar, spriteQtdePedrasJogadores) {
    this.tamanho = {
        largura : $(window).width(),
        altura : $(window).height()
    }
    
    this.containerId = 'game';
    this.backgroundColor = "#FFF";
    
    this.mesa = mesa;	
    this.maoPrincipal = maoPrincipal;
    this.spriteComprar = spriteComprar;
    this.spriteQtdePedrasJogadores = spriteQtdePedrasJogadores;
};
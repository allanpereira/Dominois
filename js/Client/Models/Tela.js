var Tela = function(mesa, spriteComprar, spriteQtdePedrasJogadores) {
    this.tamanho = {
        largura : $("#game").width(),
        altura : $("#game").height()
    }
    
    this.containerId = 'game';
    this.backgroundColor = "#FFF";
    
    this.mesa = mesa;	
    this.maoPrincipal = new MaoPrincipal(this.tamanho.altura);
    this.spriteComprar = spriteComprar;
    this.spriteQtdePedrasJogadores = spriteQtdePedrasJogadores;
};
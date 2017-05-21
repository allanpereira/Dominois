var SpriteMesa = function() {
    var self = this;
    
    this.nome = "mesa";
    
    this.posicao = {
        x: 50,
        y: 50
    };
    
    this.tamanho = {
        altura: 500,
        largura: 700
    };
    
    this.posicaoPedraInicial = { x: 330, y: 220 };
    this.posicaoPedraEsquerda = JSON.parse(JSON.stringify(self.posicaoPedraInicial));
    this.posicaoPedraDireita = JSON.parse(JSON.stringify(self.posicaoPedraInicial));
    
    this.JogarPrimeiraPedra = function(jogada) {
        self.JogarPedra(jogada, self.AplicarDesvioSprite(jogada, self.posicaoPedraInicial));
    }

    this.JogarPedraEsquerda = function(jogada) {		
		self.posicaoPedraEsquerda.x = self.posicaoPedraEsquerda.x - jogada.tamanhoHorizontal;
        self.JogarPedra(jogada, self.AplicarDesvioSprite(jogada, self.posicaoPedraEsquerda));
    }
    
    this.JogarPedraDireita = function(jogada) {
		self.posicaoPedraDireita.x = self.posicaoPedraDireita.x + jogada.tamanhoHorizontal;
        self.JogarPedra(jogada, self.AplicarDesvioSprite(jogada, self.posicaoPedraDireita));
    }
	
	this.AplicarDesvioSprite = function (jogada, posicao) {
		return { x: posicao.x + jogada.desvioSprite.x, y: posicao.y + jogada.desvioSprite.y };
	}
	
	//this.CalcularPosicaoPedra = function(jogada, posicao) {		
	//	posicao = self.AplicarDesvioSprite(jogada, posicao);
	//	return posicao;
	//}
	    
    this.JogarPedra = function(jogada, posicao) {		
        jogada.pedra.sprite.phaserSprite.position.x = posicao.x;
        jogada.pedra.sprite.phaserSprite.position.y = posicao.y;
		jogada.pedra.sprite.phaserSprite.angle = jogada.rotacaoSprite;
    }
};


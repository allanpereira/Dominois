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
		var posicao = self.CalcularPosicaoPedra(jogada, self.posicaoPedraEsquerda);
        self.JogarPedra(jogada, posicao);	
    }
    
    this.JogarPedraDireita = function(jogada) {
        var posicao = self.CalcularPosicaoPedra(jogada, self.posicaoPedraDireita);
        self.JogarPedra(jogada, posicao);
    }
	
	this.AplicarDesvioSprite = function (jogada, posicao) {
		posicao.x = posicao.x + jogada.desvioSprite.x;
		posicao.y = posicao.y + jogada.desvioSprite.y;
		return posicao;
	}
	
	this.CalcularPosicaoPedra = function(jogada, posicao) {
		posicao.x = posicao.x + jogada.tamanhoHorizontal;
		posicao = self.AplicarDesvioSprite(jogada, posicao);
		return posicao;
	}
	    
    this.JogarPedra = function(jogada, posicao) {		
        jogada.pedra.sprite.phaserSprite.position.x = posicao.x;
        jogada.pedra.sprite.phaserSprite.position.y = posicao.y;
		jogada.pedra.sprite.phaserSprite.angle = jogada.rotacaoSprite;
    }
};


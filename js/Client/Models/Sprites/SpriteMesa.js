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
	this.proximaPedraEsquerda = JSON.parse(JSON.stringify(this.posicaoPedraInicial));
	this.proximaPedraDireita = JSON.parse(JSON.stringify(this.posicaoPedraInicial));
	
	this.JogarPrimeiraPedra = function(jogada) {
		self.JogarPedraEsquerda(jogada);
		self.AtualizarValorProximaDireita(jogada);
	}

	this.JogarPedraEsquerda = function(jogada) {
		self.JogarPedra(jogada, self.proximaPedraEsquerda);	
		self.AtualizarValorProximaEsquerda(jogada);
	}
	
	this.AtualizarValorProximaEsquerda = function(jogada) {
		self.proximaPedraEsquerda.x = self.proximaPedraEsquerda.x - jogada.tamanhoHorizontal;
	}

	this.JogarPedraDireita = function(jogada) {
		self.JogarPedra(jogada, self.proximaPedraDireita);
		self.AtualizarValorProximaDireita(jogada);
	}

	this.AtualizarValorProximaDireita = function(jogada) {
		self.proximaPedraDireita.x = self.proximaPedraDireita.x + jogada.tamanhoHorizontal;
	}
	
	this.JogarPedra = function(jogada, posicao) {
		jogada.pedra.sprite.phaserSprite.position.x = posicao.x;
		jogada.pedra.sprite.phaserSprite.position.y = posicao.y;
		jogada.pedra.sprite.phaserSprite.angle = jogada.rotacaoSprite;
	}
};


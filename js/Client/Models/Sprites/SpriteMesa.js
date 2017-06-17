var SpriteMesa = function() {
    var self = this;
    
    this.nome = "mesa";
        
	this.auxiliarPedra = {
		superior: 0,
		inferior: 0,
		direita: 0,
		esquerda: 0,
		centro: {
			x: 0,
			y: 0
		},
		Calcular: function() {
			this.centro.x = self.tamanho.largura/2;
			this.centro.y = self.tamanho.altura/2;

			this.superior = this.centro.x - self.tamanhoBase.largura/2;
			this.esquerda = this.centro.y - self.tamanhoBase.altura/2;
			this.inferior = this.centro.y + self.tamanhoBase.altura/2;
			this.direita = this.centro.x + self.tamanhoBase.largura/2;	
		}
	}

    this.tamanhoBase = {
        altura: 1100,
        largura: 1100
    };

	this.posicao = {
        x: 0,
        y: 0
    };

	this.tamanho = {
        altura: self.tamanhoBase.altura,
        largura: self.tamanhoBase.largura
    };

	this.phaserSprite;
	this.proximaJogadaEsquerda;
	this.proximaJogadaDireita;
};

SpriteMesa.prototype.Jogar = function(moveType, ladoPedra, pedra, pedraAnterior, mesa) {
	var jogadaSprite = this.PrepararJogada(moveType, ladoPedra, pedraAnterior, mesa);
	this.MoverPedra(jogadaSprite, pedra, pedraAnterior);
}

SpriteMesa.prototype.PrepararJogada = function(moveType, ladoPedra, pedraAnterior, mesa) {
	switch (moveType) {
		case MoveType.FirstDomino:
			this.proximaJogadaEsquerda = { jogada: new JogarParaEsquerdaOuParaBaixo() };
			this.proximaJogadaDireita = { jogada: new JogarParaDireitaOuParaCima()};
			return new PrimeiraJogada().Jogar(this.auxiliarPedra.centro, ladoPedra);
		
		case MoveType.LeftSide:
			return this.proximaJogadaEsquerda.jogada.Jogar(this.proximaJogadaEsquerda, ladoPedra, pedraAnterior, mesa);
		
		case MoveType.RightSide:
			return this.proximaJogadaDireita.jogada.Jogar(this.proximaJogadaDireita, ladoPedra, pedraAnterior, mesa);
	}
}

SpriteMesa.prototype.MoverPedra = function(jogadaSprite, pedra, pedraAnterior) {		
	
	pedra.sprite.phaserSprite.position.x = jogadaSprite.x;
	pedra.sprite.phaserSprite.position.y = jogadaSprite.y;
	pedra.sprite.phaserSprite.angle = jogadaSprite.rotacaoSprite;
	pedra.sprite.rotacaoSprite = jogadaSprite.rotacaoSprite;

	this.phaserSprite.addChild(pedra.sprite.phaserSprite);
	console.log(pedra);
}

SpriteMesa.prototype.CarregarSpritePhaser = function(larguraTela, alturaTela) {

	if (larguraTela > this.tamanho.largura) {
		this.tamanho.largura = larguraTela;
	} else {
		if (alturaTela > larguraTela) {
			this.tamanho.largura *= larguraTela/alturaTela;
		}
	}

	if (alturaTela > this.tamanho.altura) {
		this.tamanho.altura = alturaTela;
	} else {
		if (larguraTela > alturaTela) {
			this.tamanho.altura *= alturaTela/larguraTela;
		}
	}
	
	this.tamanho.largura *= 10;
	this.tamanho.altura *= 10;
	this.posicao.x = (this.tamanho.largura - larguraTela)/2;
	this.posicao.y = (this.tamanho.altura - alturaTela)/2;

	this.auxiliarPedra.Calcular();

	this.phaserSprite = game.add.tileSprite
	(
		-1*this.posicao.x,
		-1*this.posicao.y,
		this.tamanho.largura,
		this.tamanho.altura,
		this.nome
	);

	this.phaserSprite.inputEnabled = true;
	this.phaserSprite.input.enableDrag(false);
}

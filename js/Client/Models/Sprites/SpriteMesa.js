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
			var esquerda = self.posicao.x + self.tamanho.largura*0.1;
			var superior = self.posicao.x + self.tamanho.altura*0.1;

			this.superior = esquerda;
			this.esquerda = superior;
			this.inferior = self.superior + self.tamanhoBase.altura;
			this.direita = self.esquerda + self.tamanhoBase.largura;

			this.centro.x = self.tamanho.largura/2.3;
			this.centro.y = self.tamanho.altura/2.3;
		}
	}

	this.posicaoBase = {
        x: 100,
        y: 300
    };

    this.tamanhoBase = {
        altura: 900,
        largura: 900
    };

	this.posicao = {
        x: 0,
        y: 0
    };

	this.tamanho = {
        altura: 0,
        largura: 0
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

	this.tamanho.largura = this.tamanhoBase.largura + 2*this.posicao.x;
	this.tamanho.altura = this.tamanhoBase.altura + 2*this.posicao.y;
	
	if (larguraTela > this.tamanho.largura) this.tamanho.largura = larguraTela;
	if (alturaTela > this.tamanho.altura) this.tamanho.altura = alturaTela;
	

	this.tamanho.largura *= 4;
	this.tamanho.altura *= 4;
	this.posicao.x = -0.3*this.tamanho.largura;
	this.posicao.y = -0.3*this.tamanho.altura;

	this.auxiliarPedra.Calcular();

	this.phaserSprite = game.add.tileSprite
	(
		this.posicao.x,
		this.posicao.y,
		this.tamanho.largura,
		this.tamanho.altura,
		this.nome
	);

	this.phaserSprite.inputEnabled = true;
	this.phaserSprite.input.enableDrag(false);
}

var serverSide = false;
if (typeof module === "object" && module && typeof module.exports === "object") {
	serverSide = true;
}

var MesaHelper = (function() {	
	var _mesaHelper = {
		nomeImagem: "mesa",
		
		posicaoPedraInicial: {
			x: 100,
			y: 100
		},
		
		posicaoPedrasCompra: {
			x: 10,
			y: 10,
		},
		
		posicaoLimiteSuperior: 20,
		posicaoLimiteInferior: 400,
		posicaoLimiteEsquerda: 20,
		posicaoLimiteDireita: 400,
	}
	
	if (serverSide) {
		exports.nomeImagem = _mesaHelper.nomeImagem;	
		exports.posicaoPedraInicial = _mesaHelper.posicaoPedraInicial;			
		exports.posicaoPedrasCompra = _mesaHelper.posicaoPedrasCompra;	
		exports.posicaoLimiteSuperior = _mesaHelper.posicaoLimiteSuperior;	
		exports.posicaoLimiteInferior = _mesaHelper.posicaoLimiteInferior;	
		exports.posicaoLimiteEsquerda = _mesaHelper.posicaoLimiteEsquerda;	
		exports.posicaoLimiteDireita = _mesaHelper.posicaoLimiteDireita;
	} else {
		return _mesaHelper;
	}
})();
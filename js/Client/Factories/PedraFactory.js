// Require SpritePedra
// Require Pedra
var PedraFactory = (function() {
    
    var CriarPedra = function(valorSuperior, valorInferior) {
        var nomePedra = String(valorSuperior).concat(valorInferior);
        
        var sprite = new SpritePedra(nomePedra);		
        var pedra = new Pedra(nomePedra, valorSuperior, valorInferior, sprite);
        
        return pedra;
    }
    
    var _pedraFactory = {		
        CriarPedrasAPartirDoServer : function(dominoes) {
            var pedras = [];
            
            for(var i = 0; i < dominoes.length; i++){
                var domino = dominoes[i];
                var pedra = CriarPedra(domino.value1, domino.value2);
                pedras.push(pedra);
            }
            return pedras;
        }
    }
    
    return _pedraFactory;	
})();
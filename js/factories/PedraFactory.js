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
        CriarPedras: function() {
            var pedras = [];
            for (var i = 0; i <= 6; i++) {
                for (var j = i; j <= 6; j++) {
                    pedras.push(CriarPedra(i, j));
                }
            }
            return pedras;
        }
    }
    
    return _pedraFactory;	
})();
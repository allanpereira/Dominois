// Require String helper

var AssetsHelper = (function () {	
    var _caminhoBase = "assets";
    var _extensaoImagens = ".png";
    var _caminhoPedras = "pedras";
    
    var BuscarImagem = function(pastas) {
        pastas.unshift(_caminhoBase);
        var path = StringHelper.MontarCaminho(pastas);
        return StringHelper.ApendarExtensao(path, _extensaoImagens);
    }
    
    var _assetsHelper = {
        BuscarImagemPedra: function(nomePedra) { 
            return BuscarImagem([_caminhoPedras, nomePedra]);
        },		
        BuscarImagemMesa: function(nomeSprite) { 
            return BuscarImagem([nomeSprite]);
        }
    }

    return _assetsHelper;
})();
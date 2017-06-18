// Require String helper

var AssetsHelper = (function () {	
    var _caminhoBase = "assets/skin";
    var _skin = localStorage["skin"];
    var _extensaoImagens = ".png";
    var _caminhoPedras = "pedras";
    
    var BuscarImagem = function(pastas) {        
        var skin = "default";
        if (_skin != null && _skin != "") {
            skin = _skin;
        }

        pastas.unshift(skin);
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
        },
        BuscarImagemComprar: function(nomeSprite) { 
            return BuscarImagem([nomeSprite]);
        },
        BuscarImagemPassar: function(nomeSprite) { 
            return BuscarImagem([nomeSprite]);
        }
    }

    return _assetsHelper;
})();
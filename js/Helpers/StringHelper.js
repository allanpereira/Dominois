var StringHelper = (function() {	
	var _stringHelper = {
		MontarCaminho: function(arrayPastas) {
			var caminho = "";
			for (var i = 0; i < arrayPastas.length; i++){
				caminho = this.ApendarCaminho(caminho, arrayPastas[i]);
			}
			return caminho;
		},
	
		ApendarCaminho: function(base, caminhoApendar) {
			base = String(base).concat("/").concat(caminhoApendar);
			return base;
		},
	
		ApendarExtensao: function(caminho, extensao) {
			return caminho.concat(extensao);
		}		
	}
	
	return _stringHelper;
})();
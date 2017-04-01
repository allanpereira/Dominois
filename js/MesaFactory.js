// Require Mesa
// Require PedraFactory

var MesaFactory = (function() {
	var _mesaFactory = {
		CriarMesa: function() {
			var pedras = new PedraFactory.CriarPedras();
			var mesa = new Mesa(pedras);
			return mesa;
		}
	}
	
	return _mesaFactory;
})();
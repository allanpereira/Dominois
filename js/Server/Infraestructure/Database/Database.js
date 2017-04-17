const sqlLite = require('sqlite-sync');

export class Database {
	
	CriarTabela(tabela) {
		let comando = "Create ";
		comando = comando.concat(tabela.ToString());
		_RodarComando(comando);
	}
	
	_RodarComando(comando) {
		sqlLite.run(comando, function(res) {
			console.log(res);			
		});
	}
}
export class Tabela {
	let self = this;
	
	constructor(nome, campos) {
		self.nome = nome;
		self.campos = campos;
	}
	
	ToString() {
		let retorno = "table ";
		retorno = retorno.concat(self.nome).concat("(");
		for (var i = 0; i < self.campos.length; i++) {
			retorno = retono.concat(self.campos[i].ToString()).concat(", ");
		}
		retono = retorno.concat(")");
		return retono;
	}
}
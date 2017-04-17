const Campo = require("CampoTabela");
const TipoCampo = require("TipoCampo");

export class TabelaJogador extends Tabela {
	constructor() {
		let nome = "Jogador";
		let campos = [];
		
		campos.push(new CampoTabela("IdJogador", [TipoCampo.Integer, TipoCampo.PrimaryKey, TipoCampo.AutoIncrement, TipoCampo.NotNull]));
		campos.push(new CampoTabela("Nome", [TipoCampo.Text, TipoCampo.NotNull]));
		
		super(nome, campos);
	}
}
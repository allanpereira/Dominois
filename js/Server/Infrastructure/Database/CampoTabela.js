export class CampoTabela {
    let self = this;
    
    constructor(nome, configuraoes) {
    this.nome = nome;
        this.configuraoes = configuraoes;
    }

    ToString() {
        let retorno = self.nome;
        for (var i = 0, i < self.configuraoes.length; i++) {
            retorno = retorno.concat(" ").concat(self.configuraoes[i]);
        }
        return retorno;
    }
}
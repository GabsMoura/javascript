class Pessoa {
    constructor(cpf = null, nome, idade, sexo) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf || 'Não Possui';
        this.sexo = sexo;
        console.log(`Nome: ${this.nome}`, `Idade: ${this.idade}`, `CPF: ${this.cpf}`, `SEXO: ${this.sexo}`);
    }

    compararSexo() {
        if (this.sexo == 'M'.toUpperCase()) {
            console.log(` ${this.nome} é MASCULINO`);
        }
        else {
            console.log(` ${this.nome} é FEMININO`);
        }
    }

    maiorIdade() {
        if (this.idade >= 18) {
            return true;
        }
        else {
            return false;
        }
    }
}

//Instanciar
const gabriel = new Pessoa('666.666.666-06', 'Gabriel', 18, 'M');
const camila = new Pessoa(null, 'Camila', 14, 'F');
gabriel.compararSexo();

if (gabriel.maiorIdade()) {
    console.log(`${gabriel.nome} É MAIOR DE IDADE!`);
}
else {
    console.log(`${gabriel.nome} É MENOR DE IDADE!`);
}  
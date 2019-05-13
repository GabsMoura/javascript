class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        console.log(`Nome: ${this.nome}`, `Idade: ${this.idade}`);
    }
    verificaIdade() {
        if (this.idade >= 0 && this.idade < 15) {
            console.log('É Criança');
        }
        else if (this.idade >= 15 && this.idade < 30) {
            console.log('É Jovem');
        }
        else if (this.idade >= 30 && this.idade < 60) {
            console.log('É Adulto');
        }
        else if (this.idade >= 60) {
            console.log('É Idoso');
        }
        else {
            return false;
        }
    }
    static verificaNome(nome) {
        if (nome.toUpperCase() == nome) {
            return true;
        }
        else {
            return false;
        }
    }
}

const gabriel = new Pessoa('Gabriel', 14);
Pessoa.verificaNome(gabriel.nome);
gabriel.verificaIdade();
if (!Pessoa.verificaNome(gabriel.nome)) {
    gabriel.nome = gabriel.nome.toUpperCase();
}

const robson = new Pessoa('Robson', 18);
Pessoa.verificaNome(robson.nome);
robson.verificaIdade();
if (!Pessoa.verificaNome(robson.nome)) {
    robson.nome = robson.nome.toUpperCase()
}

const natalia = new Pessoa('Natália', 32);
Pessoa.verificaNome(natalia.nome);
natalia.verificaIdade();
if (!Pessoa.verificaNome(natalia.nome)) {
    natalia.nome = natalia.nome.toUpperCase()
}

const jose = new Pessoa('José', 62);
Pessoa.verificaNome(jose.nome);
jose.verificaIdade();
if (!Pessoa.verificaNome(jose.nome)) {
    jose.nome = jose.nome.toUpperCase();
}
class Pessoa {
    constructor(cpf = null, nome, idade, sexo) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf || 'Não Possui';
        this.sexo = sexo;
        console.log(`Nome: ${this.nome}`, `Idade: ${this.idade}`, `CPF: ${this.cpf}`, `SEXO: ${this.sexo}`);
    }

    // Método não estático
    // Com retorno void
    compararSexo() {
        if (this.sexo == 'M'.toUpperCase()) {
            console.log(` ${this.nome} é MASCULINO`);
        }
        else {
            console.log(` ${this.nome} é FEMININO`);
        }
    }

    // Método não estático
    // Com retorno
    maiorIdade() {
        if (this.idade >= 18) {
            return true;
        }
        else {
            return false;
        }
    }

    // Método estático -> static
    static exemplo(sexo){
        // MASCULINO
        // FEMININO
        console.log(sexo);
        if (sexo == 'M') {
            console.log('MASCULINO');
        }
        else {
            console.log('FEMININO');
        }
        console.log('Este é um método estático.')
    }

     // Método estático -> static
     // Com retorno booleano
    static verificaNome(nome) {
        if (nome.toUpperCase() == nome) {
            return true;
        }
        else {
            return false;
        }
    }
}

// Estou instanciando um novo objeto (classe).
const gabriel = new Pessoa('666.666.666-06', 'Gabriel', 18, 'M');

// Estou acessando um método não estático
// Que o retorno é void
gabriel.compararSexo();

// Este é um método estático
// Não precisa instanciar
// Verifica se o nome é maiúsculo
Pessoa.exemplo(gabriel.sexo);
if(!Pessoa.verificaNome(gabriel.nome)) {
    gabriel.nome = gabriel.nome.toUpperCase();
}
if (gabriel.maiorIdade()) {
    console.log(`${gabriel.nome} É MAIOR DE IDADE!`);
}
else {
    console.log(`${gabriel.nome} É MENOR DE IDADE!`);
}  

console.info(Pessoa);
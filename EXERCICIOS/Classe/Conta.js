class Conta {
    constructor(){
        this.saldo = 0;
    }
    //saque é um método, valorSaque é um parâmetro, this.saldo é um atributo.
    saque(valorSaque){
        this.saldo = this.saldo - valorSaque;
    }
     //deposito é um método, valorDeposito é um parâmetro, this.saldo é um atributo.
    deposito(valorDeposito){
        this.saldo = this.saldo + valorDeposito;
    }
     //exibirSaldo é um método.
    exibirSaldo(){
        console.log(`Saldo Atual: R$ ${this.saldo}`);
    }
}

let conta = new Conta()
conta.deposito(100000);
conta.saque(5000);
conta.exibirSaldo();
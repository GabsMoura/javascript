class Calculadora {
    constructor(){

    }

    
    static somar(valor1, valor2){
        const resultado = valor1 + valor2;
        console.log(`Resultado da soma: ${resultado}`);
    }
    static subtrair(valor1, valor2){
        const resultado = valor1 - valor2;
        console.log(`Resultado da subtração: ${resultado}`);
    }
    static dividir(valor1, valor2){
        const resultado = valor1 / valor2;
        console.log(`Resultado da divisão: ${resultado}`);
    }
    static multiplicar(valor1, valor2){
        const resultado = valor1 * valor2;
        console.log(`Resultado da multiplicação: ${resultado}`);
    }
}

Calculadora.somar(10,40);
Calculadora.subtrair(50,10);
Calculadora.dividir(50,2);
Calculadora.multiplicar(9,9);
const nome = 'Gabriel';
let altura = 172;
let peso = 85;

altura = parseFloat(altura);
peso = parseFloat(peso);

//Conversão para Metros
altura = altura / 100;
// let imc = peso / (altura * altura);
let imc = peso / Math.pow(altura, 2);
let classificacao = '';

if (imc < 16) {
    classificacao = 'Baixo peso muito grave';
}
else if (imc >= 16 && imc <= 16.99) {
    classificacao = 'Baixo peso grave';
}
else if (imc >= 17 && imc <= 18.49) {
    classificacao = 'Baixo peso';
}
else if (imc >= 18.50 && imc <= 24.99) {
    classificacao = 'Peso normal';
}
else if (imc >= 25 && imc <= 29.99) {
    classificacao = 'Sobrepeso';
}
else if (imc >= 30 && imc <= 34.99) {
    classificacao = 'Obesidade Grau I';
}
else if (imc >= 35 && imc <= 39.99) {
    classificacao = 'Obesidade Grau II';
}
else {
    classificacao = 'Obesidade Grau III';
}

console.log(`${nome} pesa ${peso} KG e sua classificação é de ${classificacao}`);
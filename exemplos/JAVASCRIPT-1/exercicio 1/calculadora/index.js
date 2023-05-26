const entrada1 = window.prompt("Insira o primeiro valor");
const a = parseFloat(entrada1);
const entrada2 = window.prompt("Insira o segundo valor");
const b = parseFloat(entrada2);

let soma = a + b;
let subtracao = a - b;
let mult = a * b;
let div = a / b;

window.alert("Soma = " + soma + "\nSubtracao = " + subtracao + "\nMultiplicacao = " + mult + "\nDivisao = " + div);

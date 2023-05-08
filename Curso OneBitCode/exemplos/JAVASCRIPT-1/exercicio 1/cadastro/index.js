const nome = window.prompt("Insira seu nome");
const sobrenome = window.prompt("Insira o sobrenome");
const campoDeEstudo = window.prompt("Insira seu campo de estudo");
const anoNascimento = window.prompt("Insira seu ano de nascimento");

parseFloat(anoNascimento);
let idade = 2023 - anoNascimento;

window.alert(
  "Nome Completo: " +
    nome +
    " " +
    sobrenome +
    "\nCampo de estudo: " +
    campoDeEstudo +
    "\nIdade: " +
    idade +
    " Anos"
);

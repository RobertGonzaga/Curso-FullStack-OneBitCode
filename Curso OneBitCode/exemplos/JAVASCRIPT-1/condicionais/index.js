const idade = prompt("Qual sua idade?");

if (idade >= 18) {
  alert("Maior de idade");
} else if (idade >= 12) {
  alert("Menor de idade");
} else if (idade < 12) {
  alert("Voce é criança");
}

const resultado = 2 === 2 ? "Verdadeiro" : "Falso";
console.log(resultado);

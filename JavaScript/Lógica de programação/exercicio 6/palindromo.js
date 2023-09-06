let palavra = prompt("Escreva a palavra");
let palavraInversa = "";

for (let i = palavra.length; i > 0; i--) {
  palavraInversa += palavra[i - 1];
}
if (palavra !== palavraInversa) {
  alert(
    "Esta palavra não é um palíndromo!" + "\n" + palavra + "\n" + palavraInversa
  );
} else {
  alert("Esta palavra é um palíndromo");
}

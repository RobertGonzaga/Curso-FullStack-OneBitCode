let numero = parseFloat(prompt("Digite o número"));
let resultados = "";

for (let i = 1; i <= 20; i++) {
  resultados += numero + "x" + i + "=" + numero * i + "\n";
}
alert("Tabuada do " + numero + "\n\n" + resultados);

const nome = prompt("Qual é o seu nome turista?");
let resposta = prompt("Você já visitou alguma cidade?");
let cidades = "";
let quantidade = 0;
if (resposta == "nao") {
  cidades = "Nenhuma";
}

while (resposta == "sim") {
  cidades += prompt("Qual cidade?");
  quantidade++;
  resposta = prompt("Você visitou mais alguma cidade?");
  if (resposta == "sim") {
    cidades += ", ";
  }
  if (resposta == "nao") {
    break;
  }
}
alert("Turista: " + nome + "\nNúmero de cidades visitadas: " + quantidade + "\nCidades: " + cidades);

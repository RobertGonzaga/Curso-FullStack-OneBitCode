let baralho = [];
let opcao = "";

do {
  opcao = prompt(
    "Cartas no baralho: " +
      baralho.length +
      "\n\n1. Adicionar uma carta" +
      "\n2. Puxar uma carta" +
      "\n3. Sair"
  );
  switch (opcao) {
    case "1":
      let novaCarta = prompt("Qual carta deseja adicionar?");
      baralho.push(novaCarta);
      break;
    case "2":
      let cartaRemovida = baralho.pop();
      if (cartaRemovida) {
        alert("A carta " + cartaRemovida + " foi removida");
      } else {
        alert("Não há mais cartas no baralho");
      }
      break;
    case "3":
      alert("Encerrando...");
      break;
    default:
      alert("Opcao Inválida");
  }
} while (opcao !== "3");

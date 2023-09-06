let montante = prompt("Qual a quantia inicial?");
montante = parseFloat(montante);
let opcao = "";

do {
  opcao = prompt(
    "Total de dinheiro: " +
      montante +
      "\n\nEscolha uma das opcoes abaixo: " +
      "\n1. Adicionar \n2. Subtrair \n3. Sair"
  );
  switch (opcao) {
    case "1":
      montante += parseFloat(prompt("Quantia a ser adicionada"));
      break;
    case "2":
      montante -= parseFloat(prompt("Quantia a ser subtraída"));
      break;
    case "3":
      alert("Saindo...");
      break;
    default:
      alert("Entrada Inválida!");
  }
} while (opcao !== "3");

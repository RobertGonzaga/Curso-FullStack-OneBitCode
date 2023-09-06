let opcao = "";

do {
  opcao = prompt(
    "Bem Vindo\n" +
      "\nSelecione uma das opcoes abaixo:" +
      "\n1. Opcao um" +
      "\n2. Opcao dois" +
      "\n3. Opcao três" +
      "\n4. Opcao quatro" +
      "\n5. Encerrar"
  );
  switch (opcao) {
    case "1":
      alert("Você escolheu a opção 1");
      break;
    case "2":
      alert("Você escolheu a opção 2");
      break;
    case "3":
      alert("Você escolheu a opção 3");
      break;
    case "4":
      alert("Você escolheu a opção 4");
      break;
    case "5":
      alert("Você escolheu encerrar");
      alert("Encerrando...");
      break;
    default:
      alert("opcao invalida...");
  }
} while (opcao !== "5");

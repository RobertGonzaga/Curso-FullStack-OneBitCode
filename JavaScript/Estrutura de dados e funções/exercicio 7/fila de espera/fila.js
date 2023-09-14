let listaDePacientes = [];
let listaOrdenada = "";
let opcao = "";

do {
  opcao = prompt(
    listaOrdenada +
      "\n\n1. Adicionar Paciente" +
      "\n2. Consultar Paciente" +
      "\n3. Sair"
  );
  switch (opcao) {
    case "1":
      let novoPaciente = prompt("Digite o nome do novo paciente");
      listaDePacientes.push(novoPaciente);
      break;
    case "2":
      alert("O paciente " + listaDePacientes[0] + " foi consultado");
      listaDePacientes.shift();
      break;
    case "3":
      alert("Encerrando...");
      break;
    default:
      alert("Opcao Invalida");
  }
  listaOrdenada = "";
  for (let i = 1; i <= listaDePacientes.length; i++) {
    listaOrdenada += i + "º " + listaDePacientes[i - 1] + "\n";
  }
} while (opcao !== "3");

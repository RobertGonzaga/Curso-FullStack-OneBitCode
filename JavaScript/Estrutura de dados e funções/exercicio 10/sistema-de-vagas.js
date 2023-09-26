function exibirMenu() {
  return prompt(
    "***Gerenciamento de vagas***" +
      "\n\nSelecione uma opção:" +
      "\n1.Listar vagas disponíveis" +
      "\n2.Criar nova vaga" +
      "\n3.Visualizar vaga" +
      "\n4.Inscrever candidato" +
      "\n5.Excluir vaga" +
      "\n6.Sair"
  );
}

function exibirVagas(vagas) {
  if (vagas.length > 0) {
    vagas.forEach(function (elemento) {
      alert(
        "Número " +
          elemento.indice +
          "\nVaga: " +
          elemento.nome +
          "\nTotal de inscritos: " +
          elemento.inscritos
      );
    });
  } else {
    alert("Não há vagas disponíveis");
  }
}

function criarVaga(vagas) {
  const novaVaga = {
    nome: prompt("Insira o nome da vaga:"),
    descricao: prompt("Escreva a descrição da vaga:"),
    dataLimite: prompt("Insira a data limite da vaga:"),
    inscritos: 0,
    indice: vagas.length + 1,
    pessoas: "",
  };
  if (
    confirm(
      "Confirma os dados da vaga?" +
        "\n\nNome: " +
        novaVaga.nome +
        "\nDescrição: " +
        novaVaga.descricao +
        "\nData limite: " +
        novaVaga.dataLimite
    )
  ) {
    vagas.push(novaVaga);
    alert("Vaga adicionada com sucesso!");
  } else {
    alert("Retornando ao menu...");
  }
}

function visualizarVagas(vagas) {
  if (vagas.length > 0) {
    const i = prompt("Digite o número da vaga") - 1;
    if (i + 1 <= vagas.length) {
      alert(
        "Número " +
          vagas[i].indice +
          "\nNome: " +
          vagas[i].nome +
          "\nDescrição: " +
          vagas[i].descricao +
          "\nData limite: " +
          vagas[i].dataLimite +
          "\nTotal de inscritos: " +
          vagas[i].inscritos +
          "\nPessoas inscritas: " +
          vagas[i].pessoas
      );
    } else {
      alert("Esta vaga não existe!");
    }
  } else {
    alert("Não há vagas disponíveis");
  }
}

function inscreverCandidato(vagas) {
  if (vagas.length > 0) {
    const nomeDoCandidato = prompt("Insira o nome do candidato");
    const i = prompt("Digite o número da vaga") - 1;
    if (i + 1 <= vagas.length) {
      if (
        confirm(
          "Deseja realmente inscrever o candidato(a) " +
            nomeDoCandidato +
            " nesta vaga?" +
            "\n\nNúmero " +
            vagas[i].indice +
            "\nNome: " +
            vagas[i].nome +
            "\nDescrição: " +
            vagas[i].descricao +
            "\nData limite: " +
            vagas[i].dataLimite +
            "\nTotal de inscritos: " +
            vagas[i].inscritos
        )
      ) {
        vagas[i].inscritos++;
        vagas[i].pessoas += nomeDoCandidato + ", ";
        alert("Salvo com sucesso!");
      } else {
        alert("Retornando ao menu...");
      }
    } else {
      alert("Esta vaga não existe!");
    }
  } else {
    alert("Não há vagas disponíveis");
  }
}

function excluiVaga(vagas) {
  if (vagas.length > 0) {
    const i = prompt("Digite o número da vaga") - 1;
    if (i + 1 <= vagas.length) {
      if (
        confirm(
          "Deseja realmente excluir esta vaga?" +
            "\n\nNúmero " +
            vagas[i].indice +
            "\nNome: " +
            vagas[i].nome +
            "\nDescrição: " +
            vagas[i].descricao +
            "\nData limite: " +
            vagas[i].dataLimite +
            "\nTotal de inscritos: " +
            vagas[i].inscritos
        )
      ) {
        vagas.splice(i, 1);
        vagas.forEach(function (elemento, i) {
          elemento.indice = i + 1;
        });
        alert("Vaga excluída com sucesso!");
      } else {
        alert("Retornando...");
      }
    } else {
      alert("Esta vaga não existe!");
    }
  } else {
    alert("Não há vagas para excluir");
  }
}

function executar() {
  let opcao = "";
  const vagas = [];
  do {
    opcao = exibirMenu();
    switch (opcao) {
      case "1":
        exibirVagas(vagas);
        break;
      case "2":
        criarVaga(vagas);
        break;
      case "3":
        visualizarVagas(vagas);
        break;
      case "4":
        inscreverCandidato(vagas);
        break;
      case "5":
        excluiVaga(vagas);
        break;
      case "6":
        alert("Encerrando...");
        break;
      default:
        alert("Insira uma opção válida!");
    }
  } while (opcao !== "6");
}

executar();

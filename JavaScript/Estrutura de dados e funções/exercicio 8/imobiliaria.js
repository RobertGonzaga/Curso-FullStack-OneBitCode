let imoveis = [];
let opcao = "";

do {
  opcao = prompt(
    "Imoveis cadastrados: " +
      imoveis.length +
      "\n\n1. Cadastrar novo imóvel" +
      "\n2. Mostrar imóveis cadastrados" +
      "\n3. Sair"
  );
  switch (opcao) {
    case "1":
      const novoImovel = {
        numero: parseFloat(imoveis.length + 1),
        dono: prompt("Nome do proprietário: "),
        quartos: prompt("Quantidade de quartos: "),
        banheiros: prompt("Quantidade de banheiros: "),
        garagem: prompt("Possui garagem?"),
      };
      imoveis.push(novoImovel);
      break;
    case "2":
      if (imoveis.length > 0) {
        let lista = "";
        for (let i = 0; i < imoveis.length; i++) {
          lista +=
            "Imóvel " +
            imoveis[i].numero +
            "\nProprietário: " +
            imoveis[i].dono +
            "\nQuantidade de quartos: " +
            imoveis[i].quartos +
            "\nQuantidade de banheiros: " +
            imoveis[i].banheiros +
            "\nPossui garagem? " +
            imoveis[i].garagem +
            "\n\n";
        }
        alert(lista);
      } else {
        alert("Não há imóveis cadastrados");
      }
      break;
    case "3":
      alert("Encerrando...");
      break;
    default:
      alert("Opcao Inválida");
  }
} while (opcao !== "3");

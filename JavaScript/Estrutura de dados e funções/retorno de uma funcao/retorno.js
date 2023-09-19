function calcularMedia(a, b) {
  const media = (a + b) / 2;
  return media;
}

const resultado = calcularMedia(2, 3);

console.log(resultado);

function criarProduto(nome, preco) {
  const produto = {
    nome,
    preco,
    estoque: 1,
  };
  return produto;
}

// console.log(criarProduto("notebook rog rtx", 8000));

function areaRetangular(base, altura) {
  return base * altura;
}

function areaQuadrada(lado) {
  return areaRetangular(lado, lado);
}

// console.log(areaQuadrada(9));

// function ola() {
//   let texto = "...";
//   return texto;
//   texto = "Ola Mundo";
//   console.log(texto);
// }

// console.log(ola());

function maioridade(idade) {
  if (idade >= 18) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
}

console.log(maioridade(25));
console.log(maioridade(15));

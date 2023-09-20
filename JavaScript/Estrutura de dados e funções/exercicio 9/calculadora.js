let opcao = "";
let resultado = "";

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

function areaRetangulo(base, altura) {
  return base * altura;
}

function areaQuadrado(lado) {
  return lado * lado;
}

function areaTrapezio(baseMaior, baseMenor, altura) {
  return ((parseFloat(baseMaior) + parseFloat(baseMenor)) * altura) / 2;
}

function areaCirculo(raio) {
  const pi = 3.14;
  return pi * (raio * raio);
}

do {
  opcao = prompt(
    "**Calculadora Geométrica**" +
      "\n\nEscolha uma das formas geométricas abaixo para calcular sua área:" +
      "\n1. Triângulo" +
      "\n2. Retângulo" +
      "\n3. Quadrado" +
      "\n4. Trapézio" +
      "\n5. Círculo" +
      "\n6. Sair"
  );
  switch (opcao) {
    case "1":
      resultado = areaTriangulo(
        prompt("Valor da base:"),
        prompt("Valor da altura:")
      );
      alert("Área do triângulo = " + resultado);
      break;
    case "2":
      resultado = areaRetangulo(
        prompt("Valor da base:"),
        prompt("Valor da altura:")
      );
      alert("Área do retângulo = " + resultado);
      break;
    case "3":
      resultado = areaQuadrado(prompt("Valor do lado:"));
      alert("Área do quadrado = " + resultado);
      break;
    case "4":
      resultado = areaTrapezio(
        prompt("Valor da base maior:"),
        prompt("Valor da base menor: "),
        prompt("Valor da altura:")
      );
      alert("Área do trapézio = " + resultado);
      break;
    case "5":
      resultado = areaCirculo(prompt("Valor do raio:"));
      alert("Área do círculo = " + resultado);
      break;
    case "6":
      alert("Encerrando...");
      break;
    default:
      alert("Insira uma opcao válida!");
  }
} while (opcao !== "6");

function areaTriangulo() {
  const base = parseFloat(prompt("Valor da base:"));
  const altura = parseFloat(prompt("Valor da altura:"));
  return (base * altura) / 2;
}

function areaRetangulo() {
  const base = parseFloat(prompt("Valor da base:"));
  const altura = parseFloat(prompt("Valor da altura:"));
  return base * altura;
}

function areaQuadrado() {
  const lado = parseFloat(prompt("Valor do lado:"));
  return lado * lado;
}

function areaTrapezio() {
  const baseMaior = parseFloat(prompt("Valor da base maior:"));
  const baseMenor = parseFloat(prompt("Valor da base menor:"));
  const altura = parseFloat(prompt("Valor da altura:"));
  return ((parseFloat(baseMaior) + parseFloat(baseMenor)) * altura) / 2;
}

function areaCirculo() {
  const raio = parseFloat(prompt("Valor do raio:"));
  const pi = 3.14;
  return pi * (raio * raio);
}

function exibirMenu() {
  return prompt(
    "**Calculadora Geométrica**" +
      "\n\nEscolha uma das formas geométricas abaixo para calcular sua área:" +
      "\n1. Triângulo" +
      "\n2. Retângulo" +
      "\n3. Quadrado" +
      "\n4. Trapézio" +
      "\n5. Círculo" +
      "\n6. Sair"
  );
}

function executar() {
  let opcao = "";
  do {
    opcao = exibirMenu();
    let resultado;

    switch (opcao) {
      case "1":
        resultado = areaTriangulo();
        break;
      case "2":
        resultado = areaRetangulo();
        break;
      case "3":
        resultado = areaQuadrado();
        break;
      case "4":
        resultado = areaTrapezio();
        break;
      case "5":
        resultado = areaCirculo();
        break;
      case "6":
        alert("Encerrando...");
        break;
      default:
        alert("Insira uma opcao válida!");
    }
    if (resultado) {
      alert("Resultado: " + resultado);
    }
  } while (opcao !== "6");
}

executar();

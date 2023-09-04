let metros = prompt("Digite o valor em metros");
let valor = parseFloat(metros);
const opcao = prompt(
  "Converter para: \n\nMilímetro (mm) \nCentímetro (cm) \nDecímetro (dm) \nDecâmetro (dam) \nHectômetro (hm) \nQuilômetro (km)"
);

switch (opcao) {
  case "mm":
    valor *= 1000;
    alert(valor + " Milímetros");
    break;
  case "cm":
    valor *= 100;
    alert(valor + " Centímetros");
    break;
  case "dm":
    valor *= 10;
    alert(valor + " Decímetros");
    break;
  case "dam":
    valor /= 10;
    alert(valor + " Decâmetros");
    break;
  case "hm":
    valor /= 100;
    alert(valor + " Hectômetros");
    break;
  case "km":
    valor /= 1000;
    alert(valor + " Quilômetros");
    break;
  default:
    alert("Insira um valor válido");
}

const veiculo1 = prompt("Nome do primeiro veiculo");
const v1 = prompt("Velocidade do primeiro veiculo");
const velocidade1 = parseFloat(v1);

const veiculo2 = prompt("Nome do segundo veiculo");
const v2 = prompt("Velocidade do segundo veiculo");
const velocidade2 = parseFloat(v2);

if (velocidade1 > velocidade2) {
  alert(veiculo1 + " é mais rápido que " + veiculo2);
} else if (velocidade1 === velocidade2) {
  alert(veiculo1 + " tem a mesma velocidade que " + veiculo2);
} else if (velocidade1 < velocidade2) {
  alert(veiculo2 + " é mais rápido que " + veiculo1);
}

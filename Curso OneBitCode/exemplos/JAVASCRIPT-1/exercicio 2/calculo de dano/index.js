const nomeAtacante = prompt("Insira o nome do personagem atacante");
const ataque = prompt("Insira o poder de ataque");
const poderAtaque = parseFloat(ataque);

const nomeDefensor = prompt("Insira o nome do personagem defensor");
let vida = prompt("Insira a quantidade de pontos de vida");
let pontosDeVida = parseFloat(vida);
const defesa = prompt("Insira o poder de defesa");
const poderDefesa = parseFloat(defesa);
let escudo = false;
const verificaEscudo = prompt("Esse personagem possui escudo? (s/n)");
let dano = 0;
if (verificaEscudo == "s") {
  escudo = true;
}

if (poderAtaque > poderDefesa && escudo == false) {
  dano = poderAtaque - poderDefesa;
}
if (poderAtaque > poderDefesa && escudo == true) {
  dano = (poderAtaque - poderDefesa) / 2;
}
if (poderAtaque <= poderDefesa) {
  dano = 0;
}
pontosDeVida -= dano;

alert(
  "Atacante:" +
    "\nNome: " +
    nomeAtacante +
    "\nPoder de ataque: " +
    poderAtaque +
    "\nDano causado: " +
    dano +
    "\n\nDefensor:" +
    "\nNome: " +
    nomeDefensor +
    "\nPoder de defesa: " +
    poderDefesa +
    "\nPontos de vida: " +
    pontosDeVida
);

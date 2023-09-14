const arr = [
  "Frodo",
  "Sam",
  "Merry",
  "Pippin",
  "Gandalf",
  "Aragorn",
  "Legolas",
  "Gimli",
];
console.log(arr);

// Adicionar elementos
//push
let tamanho = arr.push("Merlin");
console.log(arr);
console.log(tamanho);

//unshift
tamanho = arr.unshift("Boromir");
console.log(arr);
console.log(tamanho);

// Remover elementos
//pop
let ultimoElemento = arr.pop();
console.log(arr);
console.log(ultimoElemento);

//shift
ultimoElemento = arr.shift();
console.log(arr);
console.log(ultimoElemento);

//pesquisar por um elemento
//includes
const inclui = arr.includes("Gandalf");
console.log(inclui);

//indexOf
const indice = arr.indexOf("Gandalf");
console.log(indice);

//Cortar e concatenar
//slice
const hobbits = arr.slice(0, 4);
const outros = arr.slice(-4);
console.log(arr);
console.log(hobbits);
console.log(outros);

//concat
const juncao = hobbits.concat(arr, "Jamelao");
console.log(juncao);

//substituicao dos elementos
//splice
const elementosRemovidos = juncao.splice(indice, 1, "Gandalf, o cinzento");
console.log(juncao);
console.log(elementosRemovidos);

//Iterar sobre os elementos
for (let indice = 0; indice < juncao.length; indice++) {
  const elemento = juncao[indice];
  console.log(elemento + " se encontra na posição " + indice);
}

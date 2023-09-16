function dobro(x) {
  alert("O dobro de " + x + " é " + x * 2);
}

// dobro(5);

function dizerOla(nome = "Anonimo") {
  alert("Olá, " + nome + "!");
}

// dizerOla("Robert");
// dizerOla();

function soma(a, b) {
  alert("Resultado da soma é " + (a + b));
}

// soma(1, 1);

function criarUsuario(nome, email, senha, tipo = "admin") {
  const usuario = {
    nome,
    email,
    senha,
    tipo,
  };
  console.log(usuario);
}

function muitosParametros(usuario) {
  usuario.nome;
}

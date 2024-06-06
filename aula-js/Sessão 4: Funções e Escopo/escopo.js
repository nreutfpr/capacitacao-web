//Escopo local vs. global:

let globalVar = 'Eu sou global!';

function myFunction() {
  let localVar = 'Eu sou local!';
  console.log(globalVar); // Acesso a variável global
  console.log(localVar); // Acesso a variável local
}

myFunction();
console.log(globalVar); // Acesso a variável global
console.log(localVar); // Erro: localVar is not defined

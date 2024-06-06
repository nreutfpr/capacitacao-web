Variáveis:
// Declaração de variáveis (var, let, const):

var x = 5;
let y1 = 10;
const PI = 3.14;


//Escopo das variáveis (global e local):
// Escopo global
var globalVar = 'Eu sou global!';

function myFunction() {
  // Escopo local
  var localVar = 'Eu sou local!';
  console.log(globalVar); // Acesso a variável global
  console.log(localVar); // Acesso a variável local
}

myFunction();
console.log(globalVar); // Acesso a variável global
console.log(localVar); // Erro: localVar is not defined
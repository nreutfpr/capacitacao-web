// Declaração de função
function greet(name) {
  console.log('Olá, ' + name + '!');
}

// Invocação de função
greet('João'); // Olá, João!

//Parâmetros e argumentos:

function calculateArea(width, height) {
  return width * height;
}

let area = calculateArea(5, 10);
console.log(area); // 50

// Funções anônimas e funções de seta (arrow functions):

// Função anônima
let greetAnon = function (name) {
  console.log('Olá, ' + name + '!');
};
greetAnon('Maria'); // Olá, Maria!

// Função de seta
let greetArrow = (name) => {
  console.log('Olá, ' + name + '!');
};
greetArrow('Pedro'); // Olá, Pedro!

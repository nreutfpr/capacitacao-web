//Aritméticos, de atribuição, comparação, lógicos:
// Operadores aritméticos

let x = 5;
let y = 3;
console.log(x + y); // 8
console.log(x - y); // 2
console.log(x * y); // 15
console.log(x / y); // 1.6666666666666667
console.log(x % y); // 2

// Operadores de atribuição
let z = 10;
z += 5; // z = 15
z -= 3; // z = 12
z *= 2; // z = 24
z /= 4; // z = 6

// Operadores de comparação
console.log(x > y); // true
console.log(x < y); // false
console.log(x >= y); // true
console.log(x <= y); // false
console.log(x == y); // false
console.log(x != y); // true

// Operadores lógicos
let a = true;
let b = false;
console.log(a && b); // false
console.log(a || b); // true
console.log(!a); // false

//Operadores ternários:
let age = 18;
let canVote = age >= 18 ? 'Sim' : 'Não';
console.log(canVote); // Sim
// Manipulação de arrays:
let numbers = [1, 2, 3, 4, 5];

// Adicionando elementos
numbers.push(6); // [1, 2, 3, 4, 5, 6]
numbers.unshift(0); // [0, 1, 2, 3, 4, 5, 6]

// Removendo elementos
let lastElement = numbers.pop(); // lastElement = 6, numbers = [0, 1, 2, 3, 4, 5]
let firstElement = numbers.shift(); // firstElement = 0, numbers = [1, 2, 3, 4, 5]

// Modificando elementos
numbers.splice(2, 1, 10); // [1, 2, 10, 4, 5]

// Métodos úteis de arrays:

let fruits = ['apple', 'banana', 'cherry'];

// forEach
fruits.forEach(function (fruit) {
  console.log(fruit);
});

// map
let uppercasedFruits = fruits.map(function (fruit) {
  return fruit.toUpperCase();
});
console.log(uppercasedFruits); // ["APPLE", "BANANA", "CHERRY"]

// filter
let longFruits = fruits.filter(function (fruit) {
  return fruit.length > 5;
});
console.log(longFruits); // ["banana", "cherry"]

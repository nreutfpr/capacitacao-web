// for, while, do...while:

// for
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}

// while
let j = 0;
while (j < 5) {
  console.log(j); // 0, 1, 2, 3, 4
  j++;
}

// do...while
let k = 0;
do {
  console.log(k); // 0, 1, 2, 3, 4
  k++;
} while (k < 5);

// Iteração com arrays: forEach, map:
let numbers = [1, 2, 3, 4, 5];

// forEach
numbers.forEach(function (num) {
  console.log(num); // 1, 2, 3, 4, 5
});

// map
let doubledNumbers = numbers.map(function (num) {
  return num * 2;
});
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

//Controle de fluxo:
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Interrompe o loop quando i === 5
  }
  console.log(i); // 0, 1, 2, 3, 4
}

for (let j = 0; j < 10; j++) {
  if (j % 2 === 0) {
    continue; // Pula a iteração quando j é par
  }
  console.log(j); // 1, 3, 5, 7, 9
}

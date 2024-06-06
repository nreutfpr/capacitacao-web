//if, else if, else:

let age = 18;

if (age >= 18) {
  console.log("Você pode votar.");
} else if (age >= 16) {
  console.log("Você pode votar com autorização dos pais.");
} else {
  console.log("Você não pode votar.");
}

//switch

let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Segunda-feira";
    break;
  case 2:
    dayName = "Terça-feira";
    break;
  case 3:
    dayName = "Quarta-feira";
    break;
  default:
    dayName = "Dia inválido";
}

console.log(dayName); // Quarta-feira
// Criando e acessando propriedades:
// Criando um objeto
let person = {
  name: 'João',
  age: 30,
  isStudent: true,
};

// Acessando propriedades
console.log(person.name); // João
console.log(person['age']); // 30

// Métodos de objeto:
let person2 = {
  name: 'João',
  age: 30,
  greet: function () {
    console.log('Olá, meu nome é ' + this.name + '!');
  },
};

person2.greet(); // Olá, meu nome é João!

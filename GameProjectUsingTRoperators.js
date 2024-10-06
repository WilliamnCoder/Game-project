// The game of Odd or Even using conditional (ternary) operators instead of if-else operator
const number = Math.floor(Math.random() * 100) +1;

const result = (number % 2 == 0) ? "even" : "odd";

console.log (`The number ${number} is ${result}`);

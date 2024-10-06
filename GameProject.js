// Using if-else operator for Odd or Even number
const number = Math.floor(Math.random()*100)+1;  //generating a number between 1-100

if (number % 2 == 0) {
    console.log (`${number} is an even number!`)
} else {
    console.log (`${number} is an odd number!`)
}
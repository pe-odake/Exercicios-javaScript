prompt = require("prompt-sync")();
//F = C * 9/5 + 32

let celsius = parseFloat(prompt("Insira a temperatura em C° "))
let Fahrenheit = celsius * 9/5 + 32;

console.log(Fahrenheit);

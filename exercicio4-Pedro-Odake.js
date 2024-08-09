prompt = require("prompt-sync")();
//F = C * 9/5 + 32

let celsius = parseFloat(prompt("Insira a temperatura em C° "))
let fahrenheit = celsius * 9/5 + 32;

console.log("A temperatura de " + celsius + "° celsius em fahrenheit é de " + fahrenheit + "° fahrenheit");

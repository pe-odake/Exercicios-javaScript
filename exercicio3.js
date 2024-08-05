prompt = require("prompt-sync")();

let valor1 = parseFloat(prompt("Insira um número "))
let valor2 = parseFloat(prompt("Insira um número "))

let numMaior = Math.max(valor1, valor2)
let numMenor = Math.min(valor1, valor2)

let diferenca = numMaior - numMenor;

console.log(diferenca);

prompt = require("prompt-sync")();

let horasTrabPorSem = parseInt(prompt("Insira a quantidade de horas trabalhadas: "))
let horasValor = parseFloat(prompt("Quando você ganha por hora: "))

let salarioSemanal = horasTrabPorSem * horasValor
let salarioMensal = 4 * salarioSemanal

console.log("Por semana você ganha " + salarioSemanal + " reais");
console.log("Por mês você ganha " + salarioMensal + " reais");

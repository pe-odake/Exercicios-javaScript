prompt = require("prompt-sync")();

let anoNascimento = parseInt(prompt("Insira o ano em que nasceu "))
let anoAtual = new Date().getFullYear()

let idade = anoAtual - anoNascimento;

console.log("Sua idade é de " + idade + " anos");
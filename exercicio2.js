prompt = require("prompt-sync")();

let anoNascimento = parseInt(prompt("Insira seu ano de ano nascimento "))
let anoAtual = new Date().getFullYear()

let idade = anoAtual - anoNascimento;

console.log(idade);

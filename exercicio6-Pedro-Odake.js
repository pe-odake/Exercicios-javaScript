prompt = require("prompt-sync")();

let nomeProd = prompt("Insira o nome do produto: ");
let precoOrig = parseFloat(prompt("Qual é o preço original: "));
let porcentDescont = parseFloat(prompt("Está com quantos porcentos de desconto: "));

let desconto = porcentDescont / 100;
let valorDesc = precoOrig * desconto;
let precoFinal = precoOrig * (1 - desconto);



console.log(nomeProd);
console.log("De " + precoOrig);
console.log("Por " + precoFinal);
console.log("Um desconto de " + valorDesc);
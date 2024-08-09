prompt = require("prompt-sync")();

let num = parseFloat(prompt("Insira um número "))

let resto = num % 2 

if(resto == 0){
    console.log("É um número par")
}
else{
    console.log("É um número ímpar")
}
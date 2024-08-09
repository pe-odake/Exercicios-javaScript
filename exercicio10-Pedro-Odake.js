prompt = require("prompt-sync")();

let num = parseFloat(prompt("Insira um número "))

let resto = num % 2 

if(resto == 0){
    console.log(num + " é um número par")
}
else{
    console.log(num + " é um número ímpar")
}
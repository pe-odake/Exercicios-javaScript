prompt = require("prompt-sync")();

let nome = prompt("Qual o nome do produto? ")
let precoUnit = parseFloat(prompt("Qual o preço do produto? "))
let quant = parseFloat(prompt("Quantos deste produto está comprando? "))
let imposto = 0.18

let valorIn = precoUnit * quant 
let valorImp = valorIn * imposto	
let valorFi = valorIn * (imposto + 1)


console.log("Produto: " + nome);
console.log("Preço por unidade: " + precoUnit);
console.log("Quantidade: " + quant);
console.log("Valor sem imposto:" + valorIn);
console.log("Imposto de: " + valorImp);
console.log("Valor com imposto " + valorFi);

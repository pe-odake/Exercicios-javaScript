prompt = require("prompt-sync")();

/*Exiba o nome do produto, o preço unitário, a quantidade, o 
imposto total, e o valor total da compra (preço total mais imposto).
*/

let nome = prompt("Qual o nome do produto? ")
let precoUnit = parseFloat(prompt("Qual o preço do produto? "))
let quanti = parseFloat(prompt("Quantos deste produto está comprando? "))
let imposto = 0.18

let valorIn = precoUnit * quanti 
let valorImp = valorIn * imposto	
let valorFi = valorIn * (imposto + 1)



console.log("Produto: " + nome);
console.log("Preço por unidade: " + precoUnit);
console.log("Quantidade: " + quanti);
console.log("Imposto de: " + valorImp.toFixed(2));
console.log("Valor com imposto " + valorFi.toFixed(2));

//Solicite ao usuário o valor total de uma compra e o número de parcelas. Calcule o valor de cada parcela, considerando que não há juros.
//para o número de parcelas. Exiba o valor total, o número de parcelas e o valor de cada parcela.

prompt = require("prompt-sync")();

let valorTotal = parseFloat(prompt("Valor total da compra: "))
let numParc = parseInt(prompt("Número de parcelas: "))

let valorParc = valorTotal / numParc

console.log("O valor total da compra é de R$" + valorTotal.toFixed(2));
console.log("Será dividido em " + numParc + " parcelas");
console.log("Cada parcela terá o valor de R$" + valorParc.toFixed(2));

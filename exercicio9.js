prompt = require("prompt-sync")();

let valorCompra = parseFloat(prompt("Valor total da compra: "));
let numParc = parseFloat(prompt("Número de parcelas: "));
let juros = parseFloat(prompt("Quantos porcento de juros: "));


let valorParc = valorCompra / numParc

console.log("O valor total da compra é de " + valorCompra);


for(var cont = 0; cont < numParc; cont++){

    let valorJuros =  (juros / 100) * 
    let valorMes = valorParc + valorJuros
    let valorMes = 
    

    console.log(valorMes)
}


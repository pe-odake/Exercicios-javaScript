prompt = require("prompt-sync")();

let valorCompra = parseFloat(prompt("Valor total da compra: "));
let numParc = parseFloat(prompt("Número de parcelas: "));
let juros = parseFloat(prompt("Quantos porcento de juros: "));


let valorParc = valorCompra / numParc

console.log(valorCompra + " será parcelado em " + numParc + " ,com uma taxa de juros de " + juros + "% ao mês.")

for(let cont = 0; cont < numParc; cont++){

    let valorJuros =  (juros / 100) * valorParc    
        valorParc = valorParc + valorJuros

    let valorMes =  valorParc.toFixed(2)
    

    console.log(valorMes)
}

//arrow functions

//1. Par impar

// function parImpar(numero){
//     if(numero % 2 == 0){
//         return 'PAR'
//     }else{
//         return 'IMPAR'
//     }
// }
// console.log(parImpar(4))

let parImpar = (numero) => numero % 2 == 0?'PAR':'IMPAR'
console.log(parImpar(4))

//2. Dobro

let dobroNumero = (numero) => numero * 2
console.log(dobroNumero(20))

//3. Média

let mediaNotas = (numero1=0,numero2=0) => ((numero1 + numero2) / 2).toFixed(2)
console.log(`Sua média foi de ${mediaNotas(5,7)} pontos`)

//4. Menor ou maior de idade

let maiorMenorIdade = idade => idade >= 18?'Você é maior de idade': 'Você é menor de idade'
console.log(maiorMenorIdade(19))

//5. Conversor de graus Celsius para Fahrenheit

let celciusParaFahrenheit = c =>{
    let f = c * 1.8 + 32
    return f
}
console.log(celciusParaFahrenheit(100))

//6. quantidade de caracteres em uma string

// function quantidadeTexto(nome){
//     if (nome.length == 0){
//         return 'Texto vazio'
//     }else{
//         return nome.length
//     }
// }
// console.log(quantidadeTexto('Arthur'))

let quantidadeTexto = nome => nome.length==0?'Texto vazio':nome.length
console.log(quantidadeTexto('Arthur'))
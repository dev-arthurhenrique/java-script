// let velocidade = 30
// console.log(`A velocidade atingida foi de ${velocidade} Km/h`)

// Função void

// 
// function digameunome(){
//     console.log('Diego')
// }
// digameunome()

// PARAMETROS REST

function somar(...valores){
    let tamanho = valores.length
    let s = 0
    for(cont in valores){
        s += valores[cont]
    }
    return s
}
console.log(somar(2,5,3))








//RETURN

// function endividadoOuNao(salario, gastos){
//     if(salario > gastos){
//         return 'Está no VERDE'
//     }else{
//         return 'Está no VERMELHO'
//     }
// }
// console.log(endividadoOuNao(4000,2000))

//ARROW FUNCTION.

//function nome(parametros){}

// let endividadoOuNao = (salario, gastos) => {
//     if(salario > gastos){
//         return 'Está no VERDE'
//     }else{
//         return 'Está no VERMELHO'
//     }
// }
// console.log(endividadoOuNao(3000,6000))
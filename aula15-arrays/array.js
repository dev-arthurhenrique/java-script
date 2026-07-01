/*
console.log('Vamos aprender sobre arrays')

let valores = [3,2,7,5,4]
console.log(`Esses são os valores: ${valores}`)
console.log(`Valores em ordem crescente: ${valores.sort()}`)
console.log(`Primeiro valor: ${valores[0]}`)
*/
//Colocando valores no Array
let bichos = []
//Adicionando o primeiro valor
bichos.unshift('Boi')
//Adicionando o ultimo valor
bichos.push('Galinha')
//Adicionando onde eu quero
bichos.splice(1,0,'Gato','Cachorro','Camelo')
console.log(`${bichos}`)
//Removendo o primeiro valor
bichos.shift()
//Removendo o ultimo valor
bichos.pop()
//Removendo o restante
bichos.splice(2,2, 'Texugo')
console.log(`${bichos}`)
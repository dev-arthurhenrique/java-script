/*
let animais = ['Gato', 'Cachorro', 'Boi', 'Vaca', 'Texugo', 'Pato']
console.log(`Nos temos ${animais.length} animais. São eles: ${animais}`)
let cores = ['azul', 'vermelho', 'verde', 'amarelo', 'roxo']
console.log(`A primeira cor é ${cores[0]}. A ultima cor é ${cores[4]}`)
let bichos = ['cachorro', 'gato', 'coelho', 'papagaio']
bichos[1] = 'Tigre'
bichos.unshift('Formiga', 'cobra')
console.log(`Esses são os bichos que temos: ${bichos}`)

let frutas = []
frutas.unshift('morango')
frutas.push('banana','uva')
frutas.splice(2,0,'kiwi')
console.log(frutas)
*/
let numeros = [5,10,15,20,25,30]
numeros.shift()
numeros.pop()
numeros.splice(2,1)
console.log(numeros)

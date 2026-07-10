// arrow functions

// function digaSeuNome(){
//     let nome = 'Diego'
//     return nome
// }
// console.log(digaSeuNome())

// let digaSeuNome = () => 'Diego'
// console.log(digaSeuNome())

// function somarValores(n1=0,n2=0){
//     let res = n1 + n2
//     return res
// }
// console.log(somarValores(5,8))

let somarValores = (n1=0,n2=0) => n1 + n2
console.log(somarValores(5,8))

let saudar = () => "Olá, Dev! Vamos praticar?"
console.log(saudar())

let dobro = n => n * 2
console.log(dobro(7))

let calcularMedia = (n1=0,n2=0,n3=0) => (n1 + n2 + n3) / 3
console.log(calcularMedia(7,3,8))

// function parOuImpar(numero){
//     if(numero % 2 == 0){
//         return 'Par'
//     }else{
//         return 'Impar'
//     }
// }
// console.log(parOuImpar(10))

let parOuImpar = numero => numero % 2 == 0 ? 'Par' : 'Impar'
console.log(parOuImpar(11))

let podeDirigir = n => n < 18? 'Apenas Carona' : 'Pode dirigir'
console.log(podeDirigir(11))

let inverterSinal = n => -n
console.log(inverterSinal(1))

let verificarSenha = (senha) => senha.length >= 8?true:false
console.log(verificarSenha('677877777'))


let aplicarDesconto = n => n * 0.9
console.log(aplicarDesconto(10))

let situacaoAluno = nota => nota >= 6? 'APROVADO' : 'REPROVADO'
console.log(situacaoAluno(2))
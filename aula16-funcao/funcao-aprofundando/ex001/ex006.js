//funções de alta ordem

// function acessoLoginAdam() {
//     const valores = []
//     for(cont in valores){
//         valores.push(valores[cont])
//     }
//     return 'Acesso liberado para Adam'
// }
// console.log(acessoLoginAdam())


// function acessoLoginMaria() {
//     const valores = []
//     for(cont in valores){
//         valores.push(valores[cont])
//     }
//     return 'Acesso liberado para Maria'
// }
// console.log(acessoLoginMaria())

const acessoLoginUsuario = (usuario) => {
    const valores = []
    for(cont in valores){
        valores.push(valores[cont])
    }
    return `Acesso liberado ao(a) ${usuario}`
}
console.log(acessoLoginUsuario('Adam'))
console.log(acessoLoginUsuario('Maria'))


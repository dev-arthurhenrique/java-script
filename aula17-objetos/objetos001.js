const dadosPessoaisCliente = {//o que estiver dentro das chaves é um objeto
    nome: 'Diego',
    idade: 20,
    altura: 1.78,
    endereco: {
        rua: 'Afreneiros',
        numero: 0,
        bairro:'Arizona'

    }
}
console.log(dadosPessoaisCliente.endereco.bairro)
const {nome, idade, altura='Altura não informada'} = dadosPessoaisCliente
console.log(altura)
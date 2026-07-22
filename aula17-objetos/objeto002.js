const guerreiro = {     nome: 'Arthur',
    classe: 'Cavaleiro',
    nível: 1
}
guerreiro.nivel = 2
guerreiro.arma = 'Espada de Ferro'
console.log(`O nome do guerreiro é ${guerreiro.nome}`)


const livro = {}
livro.titulo = 'O Hobbit',
livro.autor = 'J.R.R Tolkien'
console.log(`O livro ${livro.titulo} foi escrito por ${livro.autor}`)

const produto = {
    nome: "Teclado Mecânico",
    preco: 150,
    desconto:30
}
produto.precoFinal = produto.preco - produto.desconto
console.log(produto.nome)
console.log(produto.precoFinal)


const carrinho = []
const item1 = {
    nome: 'Mouse',
    quantidade: 1
}
const item2 = {
    nome: 'Teclado',
    quantidade: 2
}
const item3 = {
    nome: 'Console',
    quantidade: 1
}
carrinho.push(item1, item2, item3)
console.log(carrinho)

const cliente = {}
cliente.nome = 'Diego'
cliente.telefone = '(99) 99999-9999'
cliente.status = 'Pendente'
console.log(cliente.status)
cliente.status = 'Finalizado'
console.log(cliente.status)
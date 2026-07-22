// Funções de alta ordem

const somarValores = (n1,n2,somar) => somar(n1,n2)
const somar = (n1,n2) => n1 + n2
console.log(somarValores(5,5,somar))

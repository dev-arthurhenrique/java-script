//criando o evento de adicionar
let adicionar = document.querySelector('input#adicionar')
adicionar.addEventListener('click', a)
let valores = []
function a(){
    let numero = document.querySelector('input#numero')
    let n = Number(numero.value)
    let seletor = document.getElementById('seletor')
    let res = document.getElementById('res')
    //validação de dados
    if(numero.value.length == 0 || n < 1 || n > 100 || valores.indexOf(n) != -1){
        alert('Número não está entre 1 e 100 ou já foi adicionado a lista')
    }else{
        valores.push(n)
        let mostrar = document.createElement('option')
        mostrar.text = `Valor ${n} adicionado`
        seletor.appendChild(mostrar)
    }
}
let finalizar = document.getElementById('finalizar')
finalizar.addEventListener('click', f)
function f(){
    let numero = document.querySelector('input#numero')
    let n = Number(numero.value)
    let seletor = document.getElementById('seletor')
    let res = document.getElementById('res')
    if(numero.value.length == 0){
        alert('Adicione pelo menos um número antes de finalizar')
    }else{
        res.innerHTML = `Foram informados ${valores.length} número(s)<br>`
        res.innerHTML += `O maior número digitado foi o ${Math.max(...valores)}<br>`
        res.innerHTML += `O menor número digitado foi o ${Math.min(...valores)}<br>`
        let soma = 0
        for(cont = 0; cont < valores.length; cont++){
            soma += valores[cont]
        }
        res.innerHTML += `A soma dos números digitados é ${soma}<br>`
        res.innerHTML += `A média é ${(soma/valores.length).toFixed(2)}`
    }      
}

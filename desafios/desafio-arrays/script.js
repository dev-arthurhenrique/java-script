//disparando o evento para adicionar valores
let adicionar = document.getElementById('adicionar')
adicionar.addEventListener('click', a)
let valores = []
function a(){
    let num = document.getElementById('numero')
    let n = Number(num.value)
    let seletor = document.getElementById('seletor')
    if(num.value.length == 0 || n < 1 || n > 100 || valores.indexOf(n) != -1){
        alert("Preencha o bloco com um número entre 1 e 100 e depois clique em 'Adicionar'. Além disso, você não pode adicionar valores repetidos")
        num.focus()
        num.value = ''
    }else{
        valores.push(n)
        let mostrar = document.createElement('option')
        mostrar.text = `O número ${n} foi adicionado a lista`
        seletor.appendChild(mostrar)
    }
}
let finalizar = document.getElementById('finalizar')
finalizar.addEventListener('click', f)
function f(){
    let num = document.getElementById('numero')
    let n = Number(num.value)
    if(num.value.length == 0){
        alert("Preencha o bloco com um número entre 1 e 100 e depois clique em 'Adicionar'. Além disso, você não pode adicionar valores repetidos")
        num.focus()
        num.value = ''
    }else{
        let res = document.getElementById('res')
        res.innerHTML = `Ao todo, temos ${valores.length} números cadastrados. São eles em ordem crescente: ${valores.sort()}<br>`
        res.innerHTML += `O maior valor é ${Math.max(...valores)}<br>`
        res.innerHTML += `O menor valor é ${Math.min(...valores)}<br>`
        let soma = 0
        for(let cont = 0; cont < valores.length; cont++){
            soma += valores[cont]
        }
        res.innerHTML += `A soma entre os número é ${soma}<br>`
        res.innerHTML += `A média entre os números é: ${(soma/valores.length).toFixed(2)}`
    }
    
}
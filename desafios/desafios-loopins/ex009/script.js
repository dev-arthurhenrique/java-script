let res = document.getElementById('res')
let calcular = document.getElementById('calcular')
calcular.addEventListener('click', clicar)
function clicar(){
    let inicio = document.getElementById('inicio')
    let final = document.getElementById('final')
    let passo = document.getElementById('passo')
    let i = Number(inicio.value)
    let f = Number(final.value)
    let p = Number(passo.value)
    //validar dados
    if(inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0){
        alert('Preencha todas as informações abaixo')
        inicio.focus()
        inicio.value = ''
        final.value = ''
        passo.value = ''
    }else{
        if(p <= 0){
            alert('Não foi possível contar, pois o passo é menor que 1')
        }else if(i < f){
            for(let cont = i; cont <= f ; cont += p){
                res.innerHTML += `${cont} 👉`
            }res.innerHTML += '🏁'
        }else{
            for(let cont = i; cont >= f; cont -= p){
                res.innerHTML += `${cont} 👉`
            }res.innerHTML += '🏁'
        }
    }
}
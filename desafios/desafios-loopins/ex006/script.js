let res = document.getElementById('res')
let verificar = document.getElementById('verificar')
verificar.addEventListener('click', clicar)
function clicar(){
    let inicio = document.getElementById('inicio')
    let final = document.getElementById('final')
    let i = Number(inicio.value)
    let f = Number(final.value)
    //validaçao de dados
    if(inicio.value.length == 0 || final.value.length == 0){
        alert('Preencha todos os dados abaixo')
        inicio.focus()
        inicio.value = ''
        final.value = ''
    }else if(i - f > 1000 || f - i > 1000){
        alert('A diferença é muito grande. Não tente travar meu site')
    }else{
        res.innerHTML = `Contado de ${i} até ${f}<br>`
        if(i < f){
            for(let cont = i; cont <= f; cont ++){
                res.innerHTML += `${cont} 👉`
            }res.innerHTML += `🏁`
        }else{
            for(let cont = i; cont >= f; cont --){
                res.innerHTML += `${cont} 👉`
            }res.innerHTML += `🏁`
        }
    }

}
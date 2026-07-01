let verificar = document.getElementById('verificar')
verificar.addEventListener('click', clicar)
function clicar(){
    let corpo = document.body
    let hora = document.getElementById('hora')
    let minuto = document.getElementById('minuto')
    h = Number(hora.value)
    m = Number(minuto.value)
    let res = document.getElementById('res')
    let imagem = document.getElementById('imagem')
    if(hora.value.length == 0 || minuto.value.length == 0){
        alert('Preencha todas as informações abaixo')
    }else if(h < 0 || h > 23 || m < 0 || m >= 60){
        alert('Um ou os dois numeros abaixo são inválidos')
    }else{
        res.innerHTML = `Agora são ${h}:${m}<br>` 
        if(h <= 12){  
            res.innerHTML += 'Bom dia'
            imagem.src = 'imagens/manha.jpg'
            corpo.style.background = 'rgb(247, 197, 137)'
        }else if(h < 18){
            res.innerHTML += `Boa tarde`
            imagem.src = 'imagens/tarde.jpg'
            corpo.style.background = 'rgb(168, 89, 89)'
        }else{
            res.innerHTML += `Boa Noite`
            imagem.src = 'imagens/noite.jpg'
            corpo.style.background = 'rgb(78, 78, 150)'
        }
    }
}
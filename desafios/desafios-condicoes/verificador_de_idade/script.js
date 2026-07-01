let verificar = document.getElementById('verificar')
verificar.addEventListener('click', clicar)
function clicar(){
    let corpo = document.body
    let atual = new Date()
    let ano_atual = atual.getFullYear()
    let ano_nascimento = document.getElementById('nascimento')
    let ano_nas = Number(ano_nascimento.value)
    let resposta = document.getElementById('resposta')
    let genero = document.getElementsByName('genero')
    let idade = ano_atual - ano_nas
    let imagem = document.getElementById('imagem')
    if(ano_nascimento.value.length == 0){
        alert('Por favor, informe sua data de nascimento')
    }else if(ano_nas < 1896 || ano_nas >= 2026){
        alert('Data de nascimento inválida')
    }else{
        if(genero[0].checked){
            corpo.style.background = 'lightblue'
            if(idade < 18){
                resposta.innerHTML = `Você é um menino de ${idade} anos de idade`
                imagem.src = 'imagens/menino.png'
            }else if(idade < 60){
                resposta.innerHTML = `Você é um homem de ${idade} anos de idade`
                imagem.src = 'imagens/homem.png'
            }else{
                resposta.innerHTML = `Você é um velho de ${idade} anos de idade`
                imagem.src = 'imagens/velho.png'
            }
        }else{
            corpo.style.background = 'pink'
            if(idade < 18){
                resposta.innerHTML = `Você é uma menina de ${idade} anos de idade`
                imagem.src = 'imagens/menina.png'
            }else if(idade < 60){
                resposta.innerHTML = `Você é uma mulher de ${idade} anos de idade`
                imagem.src = 'imagens/mulher.png'
            }else{
                resposta.innerHTML = `Você é uma velha de ${idade} anos de idade`
                imagem.src = 'imagens/velha.jpg'
            }
        }
    }
}
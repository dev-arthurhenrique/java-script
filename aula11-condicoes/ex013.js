let agora = new Date()
let hora = agora.getHours()
let minuto = agora.getMinutes()
console.log(`Agora sao ${hora}:${minuto}`)
if(hora < 0 || hora > 23){
    console.log('hora INVÁLIDA')
}else{
    if(hora < 5){
        console.log('BOA MADRUGADA')
    }else if(hora < 13){
        console.log('BOM DIA')
    }else if(hora < 18){
        console.log('BOA TARDE')
    }else{
        console.log('BOA NOITE')
    }
}
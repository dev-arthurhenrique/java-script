console.log('<--- ELEIÇÃO --->')
let idade = 66
if(idade < 16){
    console.log('NÃO VOTA')
}else if(idade >= 16 && idade < 18 || idade > 65){
    console.log('VOTO FACULTATIVO')
}else{
    console.log('VOTO OBRIGATÓRIO')
}
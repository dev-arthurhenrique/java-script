function parimpar(n){//parametro formal
    if(n % 2 == 0){
        return 'PAR'
    }else{
        return 'IMPAR'
    }
}
let chamada = parimpar(5)//parametro real
console.log(chamada)
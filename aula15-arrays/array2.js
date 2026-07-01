let valores = [8,5,3,2,1,9]
console.log(`Valores em ordem: ${valores.sort()}`)
/*
for(cont = 0; cont < valores.length; cont ++){
    console.log(`O valor ${valores[cont]} está na posição ${cont}`)
}
*/
for(cont in valores){
    console.log(`O valor ${valores[cont]} está na posição ${cont}`)
}
let valores = [8,5,3,2,1,9]
valores.push(7)
valores.sort()
/*
for(cont = 0; cont < valores.length; cont++){
    console.log(`O numero ${valores[cont]} está na posição ${cont}`)
}
*/
for(cont in valores){
    console.log(`O número ${valores[cont]} está na posição ${cont}`)
}
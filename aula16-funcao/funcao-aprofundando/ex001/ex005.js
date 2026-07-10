// Escopo

// let numero = 1// escopo global
// function teste(){
//     var numero2 = 2 //escopo local. So ocorre aqui
//     console.log(numero2)
// }
// teste()

// if(true){
//     var numero3 = 3
// }
// console.log(numero3)

//ESCOPO LEXICO
function main(){
    let numero = 1
    function secundaria(){     
        console.log(numero)       
    }
    secundaria()
}
main()
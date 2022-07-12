Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim

}
const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)){
        console.log(' Quadro de Honra!!')
    } else if(nota.entre(7, 8.99)){
        console.log(' Tente novamente mais tarde')
    } else if(nota.entre(4, 5.99)){
        console.log(" Reprovado!!!")
    } else if(nota.entre(2, 3.99)){
        console.log(' Você foi Ridicularmente Reprovado!!!')
    } else {
        console.log(' Nota inválida')
    }

   // console.log(" Fim!!! ")
}

imprimirResultado(2.59)
imprimirResultado(9)
imprimirResultado(8)
imprimirResultado(5)
imprimirResultado(-1)
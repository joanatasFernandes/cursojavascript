<<<<<<< HEAD
Number.prototype.entre = function (incio, fim) {
    return this >= incio && this <= fim
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de Honra')

    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado')

    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperação')

    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado')
    } else {
        console.log('Nota Inválida')
    }

}


imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.5)
imprimirResultado(2.3)
imprimirResultado(-1)
console.log('Fim')
=======
Number.prototype.entre = function (incio, fim) {
    return this >= incio && this <= fim
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de Honra')

    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado')

    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperação')

    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado')
    } else {
        console.log('Nota Inválida')
    }

}


imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.5)
imprimirResultado(2.3)
imprimirResultado(-1)
console.log('Fim')
>>>>>>> ad6d55d8ee7fc21a9af4886f16f5bb682f09f62b

const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log(' Quadra de Honras!!!')
            break

        case 8:

        case 7:
            console.log(' Aprovados')
            break

        case 6:

        case 5:
            console.log('Recuperação!!! fio')
            break

        case 4: case 3:
            console.log('Reprovado sem Dó !!!!!')
            break

        case 2: case 1: case 0:
            console.log('Estude mais e se esforce!!! ')
            break

        default:
            console.log('Nota inválida!!!')

    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(7)
imprimirResultado(6.55)
imprimirResultado(4)
imprimirResultado(2.33)
imprimirResultado(-5)
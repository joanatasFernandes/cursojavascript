function teste1(num ) {
    if(num > 7)
    console.log(num)
    console.log('final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); { // cuiddado com o ';', não usar com as estruturas de controle
    console.log(num)
    console.log('teste com ; ' + num)
    }
}
teste2(6)
teste2(8)

function mediaMaior(nota) {
    if(nota > 8) {
        console.log(' Aprovado com média acima.. '+ nota)
    } else {
        console.log(' Reprovado com nota abaixo da media... ' + nota )
    }
}
mediaMaior(7.5)
mediaMaior(9.5)


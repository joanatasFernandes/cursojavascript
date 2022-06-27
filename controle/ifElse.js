const imprimirResultado = function (nota) {
    if (nota > 7) {
        console.log('Aprovado!!', nota)
    } else {
        console.log('Reprovado', nota)
    }

}

imprimirResultado(6.8); 
imprimirResultado(10);
imprimirResultado('epa')// cuidado para não cair em um condição onde a entrada não condiz com o resultado, pois JavaScrip é uma linguagem que permite este tipo de resultado
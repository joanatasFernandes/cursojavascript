/* Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).


*/

let triangulo = function (lado1, lado2, lado3) {

    /* if(lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1){
         console.log('Esse é realmente um TRIANGULO')
     }*/
    if (lado1 == lado2 && lado1 == lado3) {
        console.log('Esse triangulo é : Equilatero')
    } else
        if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
            console.log('Esse triangulo é : Isóceles')
        } else
            console.log('Esse triangulo é : Escaleno ')
    console.log('Esse são os lados do triangulo', lado1, lado2, lado3)
}




triangulo(25, 13, 1)



/*conceito de HOISTING é aplicado com a declaração de variavel usando var,
trata-se de jogar pra cima mesmo antes da declaração da variavel, podendo gerar alguns
efeitos estranhos e indesejaveis.
*/
console.log('a =', a)
var a = 2
console.log('a =', a)

console.log('b =',b )
let b = 2
console.log('b =', b)
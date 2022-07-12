const valores = ([7.7, 8.9, 6.3, 9.2]) //no Js o Array é dinamico, na medida que vc adiciona elementos ele cresce ou diminui seu tamanho.
console.log(valores[0], valores[3])
console.log(valores[4])

valores [4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')//função que adiciona elemento ao array
console.log(valores)

console.log(valores.pop())//função que remove o elemento do array
delete valores[0] //função que deleta o elemento do array, no contexto de um objeto.
console.log(valores)

console.log(typeof valores)//array é uma estrutura tipo object! 
 
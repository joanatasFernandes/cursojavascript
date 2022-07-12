//Strings é uma cadeia de caracteres delimitada por "", ', ´´,

const escola = "cod3r"

console.log(escola.charAt(4))// funçao para pegar um determinado caracter dentro da string
console.log(escola.charAt(5))//
console.log(escola.charCodeAt(3))//função para pegar o codigo de determinado caracter usando o charcodeAt
console.log(escola.indexOf('3'))//função que pega apartir de um caractere que faz parte da string dentro da função, o indece dele com indexOF

console.log(escola.substring(1))// fizemos o chamado apartir do indece incial
console.log(escola.substring(0, 3))//chamando novamente apartir do indice inicial e o final.

console.log('escola '.concat(escola).concat("!!"))//concatenando uma string com a variavél concatenando com outra string
console.log('escola ' + escola + "!!")//concatenado de forma diferente, porém com  o mesmo resultado.
console.log(escola.replace(3, 'e'))//substituindo a posição da string pela string 'e'

console.log('Ana,Maria,Pedor'.split(','))//usa o split para quebras uma string e passar como um Array, passando uma expressão regular para ter um resultado mais coerente.bonitinho kkk
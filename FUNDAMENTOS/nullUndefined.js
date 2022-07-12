let valor //não inicializada
console.log(valor)

valor = null //ausência de valor
console.log(valor)
//console.log(valor.toString())// erro , não se pode ler uma variavél que esta null ou apontando pra null
const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefinde
console.log(!!produto.preco)
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)

const a =  'teste'
const b = a
console.log(b)

let d = 10
let c = d
c++
console.log(c)
console.log(d)
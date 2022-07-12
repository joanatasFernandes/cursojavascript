const carrinho = [
    '{"nome":"Borracha","preco": 3.45}',
   '{"nome":"Caderno", "preco": 13.90}',
    '{"nome": "Kit de lapis", "preco": 41.22}',
    '{"nome":"Caneta","preco": 7.50}'
]

//console.log(JSON.stringify(carrinho[0]))

// retornar um array apenas com os numeros

const transformaObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco 

 console.log(transformaObjeto(carrinho[3]).nome)
 
//  const resultado = carrinho.map(transformaObjeto).map(apenasPreco)
//  console.log(resultado)


// const parseToProduto = p => JSON.parse(p)

// const produtos = carrinho.map(parseToProduto)
// const nome = carrinho.map(p => JSON.parse(p).nome)
// nome.sort((a,b)=> a > b ?1: -1)
// console.log(produtos)

// console.log(nome)



//nao consegui retornar so os nomes


// const transformaNome = json=> JSON.stringify(json)
// const apenasNome = produto => produto.nome
// const infomeNome = carrinho.map( transformaNome).map(apenasNome)

// console.log(infomeNome)




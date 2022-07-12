//implementando o map

Array.prototype.map2 = function(callBack){
    const newArray = []
    for (let i =0 ; i < this.length; i++){
        newArray.push(callBack(this[i], i , this))

    }
    return newArray
}

const carrinho = [
    '{"nome":"Borracha","preco": 3.45}',
    '{"nome":"Caderno", "preco": 13.90}',
    '{"nome": "Kit de lapis", "preco": 41.22}',
    '{"nome":"Caneta","preco": 7.50}'
]

// retornar um array apenas com os numeros

const transformaObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco 
 
const resultado = carrinho.map2(transformaObjeto).map2(apenasPreco)
console.log(resultado)

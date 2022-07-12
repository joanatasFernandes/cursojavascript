const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad', preco: 4199, fragil: true},
    {nome: 'Desktop Gamer', preco: 3978, fragil : true},
    {nome: 'livro Dados', preco: 150, fragil: false},
    {nome: ' Copo de Plastico', preco: 12.99, fragil: false}
]
console.log(produtos.filter(function(p){
      
    return  true
}))

const caro = produtos => produtos.preco >= 500
const fragil = produtos => produtos.fragil

console.log(produtos.filter(caro).filter(fragil))
//console.log(produtos.filter(fragil))
// Coleção dinamica de pares chaves/valor .

const produto = new Object
produto.nome = ' Cadeira'
produto['Marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marcad do Produto']

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome:  'Audi',
        idade: 56,
        endereco:{
            logradouro: ' Rua ABC',
            numero: 123
        }
    
    },
    condutores: [{
        nome: 'Jonathan ',
        idade: 19
    },{
        nome:'Arthur',
        idade: 21
    
    }],
    calculaValorSeguro: function() {
        //...
    }
 
}

carro.proprietario.endereco.numero = 100
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante' 
console.log(carro)

//delete carro.condutores
delete carro.proprietario.endereco
delete carro.calculaValorSeguro

console.log(carro)


console.log(carro.condutores)
console.log(carro.condutores.length) 


// object : importãncia de objeto.! criando um object de forma literal.
//objeto é uma coleçaõ de chave => valor.
//JSON, não é objeto em javaScrip, é uma formato textual do object

const prod1 = {}     //objeto vazio
prod1.nome = 'Celualr ultra mega' //pode-se criar dinamicamente atributos 
prod1['desconto legal'] = 0.40   // evitar atributos com espaço
prod1.preco = 4998.90

//dentro de um objeto só se pode ter um identificador único, chave valor.!

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 89.90
}

console.log(prod2)

// pode-se usar , tipos diferentes em object, strings, função, etc!
const prod3 = {
    nome: 'Camisa Polo',
    preco: 89.90,
    obj: {
        cor: 2,
        estampa: 3,
        obj: {
            tecido: 1
        }
    }
}
console.log(prod3)


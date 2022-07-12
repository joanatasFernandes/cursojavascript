//novo recurso de ES2015

const pessoa = {
    nome: 'Ana ',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade } = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada) 

// não tente acessar atributos que não existe, vai dar problema.
const {endereco: { logradouro, numero} } = pessoa
console.log(logradouro, numero)
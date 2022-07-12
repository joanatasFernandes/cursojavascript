// pessoa -> 123{...}

const pessoa = { nome: ' joão' }
 pessoa.nome = ' Pedro'
 console.log(pessoa)

 // pessoa ->  456 {...}
 //  pessoa -> {nome, 'Ana'}
// const pessoa nao vai mudar por que é um objeto constante
 Object.freeze(pessoa)

//nao pode alterar o objeto depois que ele foi congelado.

 pessoa.nome = ' Maria'
 pessoa.end = 'Rua ABC'
 delete pessoa.nome

 pessoa.nome = ' Maria'
 console.log(pessoa.nome)
 console.log(pessoa)

 // freeze não deixa mudar o objeto constante., sem que de erro no programa
 const pessoaConstante = Object.freeze({nome: ' joão'})
 console.log(pessoaConstante)
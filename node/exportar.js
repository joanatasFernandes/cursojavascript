// "This" é uma referencia para a varialvel Module.exports dentro do modulo
console.log(module.exports === this);
// outra forma de apontar para module.exports 
console.log(module.exports === exports);

// agora o 'a' será visivel fora do arquivo
this.a = 1;
exports.b = 2;
module.exports.c = 3;

exports = null; // Mesmo setando NULL ele ainda consta os valores que as variaveis receberam, por que tanto o exports e o module.exports apontam para o mesmo objeto  referenciado , assim com o THIS.
console.log(module.exports);

// mesmo alterando varias veses e apontando para outro objeto, ele retornara o valor de module.exports 
// sae voçê for usar esse padrão e tentar atribuir um novo objeto pra ser exportado não pode usar desta forma.

exports = {
    nome: 'jonatas'
}
console.log(module.exports);
//essa é a forma correta de exportar e atribuir um novo objeto ao module.exports
module.exports = { publico: true }
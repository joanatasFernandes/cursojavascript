const moduloA = require('./moduloA')
const moduloB = require('./moduloB')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.atelogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)

/**
 * comandos para importar mudulos de terceiros atraves do node.
 * visualizar versão do node.js na maquina node -v
 * npm -v , comando para instalar bibliotecas atraves do terminal
 * npm i lodash . instala biblioteca lodash "install"
 * criei o arquivo git.ignore para que possa ignorar os arquivos que não serão upados para o repositorio do github.
 * nodemon usandoModolosTerceiros.js comando usado para rodar um modulo de terceiro no node
 */


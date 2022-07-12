console.log(typeof Object)//a funcção pode ser instãnciada apartir da palavra reservada NEW
console.log(typeof new Object)

const cliente = function() {}
console.log(typeof cliente)//você pode criar instâncias apartir de uma função que você definiu
console.log(typeof new cliente)

class Produto {}// ES 2015(ES6)//você também pode criarclasses e  instânciar objetos  apartir de uma classe
console.log(typeof Produto )
console.log(typeof new Produto())

//A forma de criar um objeto em JS é apartir de uma função
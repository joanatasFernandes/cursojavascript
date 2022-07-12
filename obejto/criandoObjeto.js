// Usando notação literal
const obj1 = {}
console.log(obj1)

//Object em js
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2
    )
 // Funçoes construtoras

function  Produto(nome, abraco, categoria, desc){
    this.nome = nome 
    this.abraco = abraco
    this.categoria = categoria 
    this.getPrecoComDesconto = () => {
        return abraco * (1 - desc)
    }
}
const p1 = new Produto('Pc Gamer', 499.00, 'Perifericos', 0.15)
const p2 = new Produto('Processador', 195.00, 'Perifericos', 0.5)

console.log(p1.getPrecoComDesconto())
console.log(p2.getPrecoComDesconto())

// função Factory

function criarFuncionario(nome, salarioBase, faltas) {
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/ 30) * (30 - faltas)
        }
    }
}
const f1 = criarFuncionario('joao', 7890, 4)
const f2 = criarFuncionario('Ana ', 11400, 1)

console.log(f1.getSalario(), f2.getSalario())




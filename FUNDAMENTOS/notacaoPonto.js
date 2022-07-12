console.log(Math.ceil(6.1))

const Obj1 = {}
Obj1.nome = 'Bola'
//Obj1['nome] =   'Bola2'
console.log(Obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('exec....')
    }
}

const Obj2 = new Obj('cadeira')
const Obj3 = new Obj('Mesa')
console.log(Obj2.nome)
console.log(Obj3.nome)
Obj3.exec()
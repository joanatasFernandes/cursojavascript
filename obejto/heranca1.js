const ferrari = {
    nome : 'Ferrari',
    modelo : 240,
    vMax : 324
}

const volvo = {
    nome : ' Volvo',
    modelo : 'v40',
    vMax : 200
}
console.log(ferrari.prototype)
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MeuObjeto() {}
    console.log(typeof  Object, typeof MeuObjeto)
    console.log(Object.prototype, MeuObjeto.prototype)

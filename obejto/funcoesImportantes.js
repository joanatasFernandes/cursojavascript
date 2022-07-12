const pessoa = {
    nome: 'Rebeca',
    idade : 15,
    peso : 13

}
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor] ) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'datadeNascimento',{
    enumerable: false,
    writable: false,
    value: '01/01/2019'
})
pessoa.datadeNascimento = '02/05/2021'
console.log(pessoa.datadeNascimento)
console.log(Object.keys(pessoa))
 

//Object.assing (ECMAScrip 2015)

const dest = { a: 1}
const o1 = {b: 2}
const o2 = {c: 3}
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)
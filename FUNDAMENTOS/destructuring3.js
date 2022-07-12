function rand({min = 0, max = 1000} = {}) { //validando para passar o paramentro se esiver null ou undefined
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
//funçao gernando numero randomico aleatório usando o operador destructuring..
const obj = { max: 50, min: 40 }
console.log(rand(obj))
console.log(rand({ min: 955}))
console.log(rand({}))
console.log(rand()) 
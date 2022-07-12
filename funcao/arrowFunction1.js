let dobro = function (a){
    return 2 * a
}
console.log(dobro(Math.PI))
dobro = (a) => {
    return 2 * a
}
console.log(dobro(6))


dobro =  a => 2 * a 
console.log(dobro(Math.PI))

let ola = function(){
    return 'ola'
}

ola = () => 'Ola'
ola = _ => 'Ola ' //possui um parametro
console.log(ola()) 
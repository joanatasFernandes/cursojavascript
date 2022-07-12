const notas = [6.7, 8.4, 8.5, 9.5, 8.9]
for (let i in notas){
    console.log(i, notas[i])
}
const pessoa = {
    nome: 'Ana',
    sobrenome: 'Fernandes',
    idade: 29,
    peso: 64
}
for(let atributos in pessoa){
    console.log(`${atributos} = ${pessoa[atributos]}`)
}
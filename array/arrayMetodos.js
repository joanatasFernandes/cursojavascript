const pilotos = ['Vetel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //massa quebro o carro Retira na ultima posição
console.log(pilotos)

pilotos.push('Verstappen')  // adiciona na ultima posição
console.log(pilotos)

pilotos.shift() // remove  na primeira posiçao
console.log(pilotos)
pilotos.unshift('Hamilton') // Adiciona na primeira posição
console.log(pilotos)

//splice pode adicionar e remover elementos

//adiciona
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//Remover
pilotos.splice(3 ,1)// massa quebro :
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo Array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4) //Pega uma parte do Array
console.log(algunsPilotos2)

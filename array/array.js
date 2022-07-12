//console.log(typeof Array, typeof new Array, typeof[])

let aprovado = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovado)

aprovado = ['Bia', 'Carlos','Ana']

aprovado[3] = 'Arthur'
aprovado[4] = 'Pedro'
console.log(aprovado.length)
//adiciona elemento a lista
aprovado.push('Abia')
console.log(aprovado[0])
console.log(aprovado[1])
console.log(aprovado[2])
console.log(aprovado[3])
console.log(aprovado[4])
console.log(aprovado[5])
console.log(aprovado[6])

aprovado[15] = 'Rafael'
console.log(aprovado.length)
console.log(aprovado[8]=== undefined)

console.log(aprovado)
aprovado.sort()//Ordena os elementos no array
console.log(aprovado)

delete aprovado[1]

console.log(aprovado[1])
console.log(aprovado[2])

aprovado = ['Bia', 'Carlos','Ana']
aprovado.splice(1,1)// remove o elemento no indice 
console.log(aprovado)
aprovado.splice(1, 0, 'Gatinha', 'Delicia')//adiciona o elemento no indice por parametro
console.log(aprovado)
aprovado.sort()
console.log(aprovado)


let nomes = new Array ('Pedro',' Biel', 'Arthur',' Joana', 'Tiago')
nomes = ['Pedro', 'Ana', 'Brenda', 'Carlos']
console.log('sem ordenação:\n',nomes)
nomes.sort()
console.log('Com ordenação:\n',nomes)

let numeros = new Array ( 12,5,3,10,1,6,21,18,-3,45,-5)
console.log('Sem ordenação:\n',numeros)

numeros.sort((a,b) => a-b)
console.log('Com ordenação:\n',numeros) 
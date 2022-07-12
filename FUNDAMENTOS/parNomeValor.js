// par Nome / valor
const saudacao = 'Opa' //contexto léxico 1

function exec() {
    const saudacao = 'faaala!!!'//contexto léxico 2
    return saudacao
}

//objetos são grupos aninhados de pares nome/valor 
const client = {
    nome : 'PEDRO',
    idade: 32,
    peso: 90,
    endereco: {
        rua: 'Rua Muito legal!!',
        numero: 123,
    } 

}

console.log(saudacao)
console.log(exec())
console.log(client)
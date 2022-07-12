function pessoa(nome) {
    this.nome = nome
    
    this.falar = function() {
        console.log( `Meu nome é ${this.nome}`)
    }
}
const p1 = new pessoa('João')
p1.falar()

const p2 = new pessoa('jonatas')
p2.falar()

function carro(marca) {
    this.marca = marca

    this.falar = function() {
        console.log(`Meu carro é: ${marca}`)
    }
}

const p3 = new carro('Ferrari')
p3.falar()

function emprego(profissao) {
    this.profissao = profissao

    this.falar = function(){
        console.log(`Minha Profissão é : ${profissao}`)
    }
}
const p4 = new emprego(' Analista de sistema')
p4.falar()
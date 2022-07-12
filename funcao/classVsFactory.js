class pessoa {
    constructor(nome){
        this.nome = nome
    }
    falar() {
        console.log( `Meu nome é ${this.nome}`)
    }
}
const p1 = new pessoa('João')
p1.falar()
//function arrow ,
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Jonathan')
p2.falar()
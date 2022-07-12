class Avo {
    constructor(sobrenome, profissao){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor (sobrenome, profissao = 'Mecanico'){
        super (sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Fernandes')
    }
}

const filhos = new Filho 
console.log(filhos)
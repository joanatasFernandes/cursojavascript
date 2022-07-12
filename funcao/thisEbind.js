const pessoa = {
    saudacao: 'bom dia!!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()// conflito entre paradigmas : funçional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()


const nome = {
    name: 'jonathan',
    sobrenome: 'fernandes',
    diga() {
        console.log(this.name)
    }
}
nome.diga()
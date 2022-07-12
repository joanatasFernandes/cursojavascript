class Lancamento{
    constructor(nome = ' genérico', valor = 0){
        this.nome = nome
        this.valor = valor
    }

}
class CicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    
    }

addLancamentos(...lancamentos){
    lancamentos.forEach(l => this.lancamentos.push(l))
        
}
    sumario(){
       let valorConsolidado = 0
       this.lancamentos.forEach(l => {
           valorConsolidado += l.valor
       })
       return valorConsolidado
    }
}


const salario = new Lancamento('Salario', 3339.00)
const faculdade = new Lancamento('Pitagoras', -512)
const pensao = new Lancamento('Pensao filhos', -550)
const saldoDevedor = new Lancamento('Contas a pagar prosoto', -860)
const concorcio = new Lancamento('prestação do sonho', -302)

const contas = new CicloFinanceiro(10, 2021)
contas.addLancamentos(salario,faculdade,pensao,saldoDevedor,concorcio)

console.log(contas.sumario())
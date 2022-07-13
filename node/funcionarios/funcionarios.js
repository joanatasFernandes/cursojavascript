const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json' // arquivo json via url
const axios = require ('axios')// axios é um client http, faz requisições para obter informações de aldo que esta remoto

//resolvendo desafio usando filter, reduce e arrowfuncion
const chinesa = f => f.pais === 'China' // busca todos com o pais igual a China
const mulheres = f => f.genero === 'F' // todas do genero  igual a F
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual // calcula o menor salario usando o reduce comparando o atual com o menor 
}

axios.get(url).then(response =>{
    const funcionarios = response.data;
    //console.log(funcionarios)
    const func = funcionarios
    .filter(chinesa)
    .filter(mulheres)
    .reduce(menorSalario)

    console.log(func)
})





/**
     Obtenha a mulher chinesa com o menor salário dentro de todos os funcionarios do arquivo.
 * Traga todos que são mulheres
 * Todos com Pais China
 * Compare o menor salario e mostre o seguinte dito acima
 *
 * 
 *  
 */



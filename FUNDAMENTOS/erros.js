function tratarErroELancar(erro) {
    //throw new Error('...')
  //  throw 10
   // throw true
   // throw 'Mensagem'
    throw {
        nome: erro.name,
        msg: erro.mensage,
        date: new Date

    }
}

function imprimirNomeGritando(obj) {
    try {
        console.log(obj.name.toUpperCase() +  '!!!!')
    }   catch (e) {
            tratarErroELancar(e)
        } finally {
            console.log('Final')
        }
    

}

const obj = { name: 'Jonathan Bonitao' }
imprimirNomeGritando(obj)
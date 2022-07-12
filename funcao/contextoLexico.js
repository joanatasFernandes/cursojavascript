const  valor = 'Global'
function  minhaFuncao() {
    console.log(valor)

}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()

/* no contexto lexico, a funcão ela ira traser o conteudo 
de onde ela foi declerada , nao onde foi chamada*/
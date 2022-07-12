{
    {
        {
            {
                {
                     var sera = 'Será ??? '
                     console.log(sera)
                }
            }
        }
    }
}//criar variavél fora da função, ela fica visivel fora do bloco também
console.log(sera) //variavél criada com var fora da função pode ser acessada em qualquer lugar do programa

function test() {//varivale criada dentro do escopo da funcição só pode ser acessada pela funcão.
    var local = 123
    console.log(local)
}//criando uma variavel dentro de uma função , só é visivel dentro da função.

test()
console.log(local)
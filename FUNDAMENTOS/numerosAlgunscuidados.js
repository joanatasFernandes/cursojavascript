console.log(7 / 0) //qualquer numero dividido por 0 não gera erro, gera infinito
console.log(7 / 0.0001)
console.log("10" / 2)//você pode fazer operaçoes com o tipo string que contenham numeros, respeitando o fomato do numero "10.2 não funciona
console.log("3" + 2)//ira concatenar 3 e 2, tendo como resultado 32 ao inves de somar pois se trata de uma string o valor 3
//A string ganha.
console.log("3" - 2)//como não faz sentido na concatenação ele ira subtrair nomalmente
console.log("show!" * 2)
console.log(0.1 + 0.7)// aqui gera impresizão, tenha cuidado
//console.log(10.toString()) não consegue se fazer essa operção, chamar o literal .função !
console.log((10.345).toFixed(2))//consegue chamar o literal dentro de () e chamar a função sem abrigatóriedade de criar uma variavél para chamar a função.
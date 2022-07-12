const funcs = []
for(var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}
 
funcs[2]()
funcs[8]() 
//pelo fato de var não ter escopo de função ele ira imprimir o valor de 10  em qualquer posição do array
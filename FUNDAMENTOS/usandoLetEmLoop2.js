const funcs = []
for(let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}
 
funcs[2]()
funcs[8]() 
funcs[6]()
//pelo fato de usar Let ele ira usar o valor de i passando pelo incremento devido ao escopo de bloca
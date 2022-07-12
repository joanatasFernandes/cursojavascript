//function declaretion
console.log(soma(3, 4)) //em JS você pode fazer o chamdo da função antes da declaração, somente nesse tipo de função 
function soma(x, y) {   //as demais, é obrigatório a declaração e depois o chamado da função
    return x + y
}

// function expression
const sub =  function (x, y ) {
    return x - y
}
console.log(sub(3, 4))
//Named function expression
const mult =  function  mult(x, y ){
    return x * y
}
console.log(mult(3, 4))
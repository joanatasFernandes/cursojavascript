let a = 7;
let b = 94;

// depois da troca .., a = 94 e b = 7

console.log(a);
console.log(b);

/*let c = a 
a = b
b = c 
*/

[a, b] = [b, a] 
console.log("Depois da troca: o valor de a :" + a);

console.log("Depois da troca: o valor de b :" + b);
//usando o metodo de troca  por valores em array, tive que usar ";" não aceitou rodar o programa sem .
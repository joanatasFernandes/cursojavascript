let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1 
console.log(num1)

console.log(++num1 === num2--) // nesse caso a precedência faz com que o resultado seja true
console.log(num1 === num2)
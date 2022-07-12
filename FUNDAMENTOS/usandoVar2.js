//varivel crianda no escopo global, é perigo. pois elas são subcritas e podem ser visivel fora do bloco .

var numero = 1 
{
    var numero = 2
    console.log('dentro =', numero)

}
console.log('fora = ', numero)
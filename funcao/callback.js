const fabricante  = ["mercedes",  "Audi", "BMW"]
function imprimirNome (nome, indice){
console.log(`${indice + 1}. ${nome}`)
}
// callBack é passar um função , que essa função sera chamada quando um evento acontecer.
fabricante.forEach(imprimirNome)
fabricante.forEach(function(fabricante) {
    console.log(fabricante)
})
//função Arrow callBack
fabricante.forEach(imprimirNome)
fabricante.forEach(fabricante => console.log(fabricante))
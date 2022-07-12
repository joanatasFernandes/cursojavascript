let comparaComThis = function(param) {
    console.log(this ===param)

}
comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis (obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThis.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)

// o This na function Arrow é o this que a ponta para o contexto para o  qual a função foi escrita
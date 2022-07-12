function soBoanota(nota) {
    if(nota >= 7){
       console.log('você foi aprovado com ' + nota)
    }

}
soBoanota(8.1)
soBoanota(6.1)

function seForVerdade(valor) {
    if(valor){
        console.log('É verdade... ' + valor)
    }
}
seForVerdade()
seForVerdade(null)
seForVerdade(undefined)
seForVerdade(NaN)
seForVerdade('')
seForVerdade(0)
seForVerdade(-1)
seForVerdade(' ')
seForVerdade('?')
seForVerdade([])
seForVerdade([1, 2])
seForVerdade({})
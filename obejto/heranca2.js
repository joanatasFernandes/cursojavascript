 Object.prototype.atrr0 =  '0' // Naõ faça isso en=m casa

 const avo = { attr1: 'A'}
 const pai = {__proto__: avo, atrr2: 'B', attr3: '3'}
 const filho = {__prot__: pai, attr3: 'c'}
 console.log(filho.attr0, filho.attr1, filho.atrr2, filho.attr3)

 const carro = {
     velAtual : 0,
     velMax : 200,
     acelererMais(delta){
         if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
         } else {
             this.velAtual = this.velMax
         }
     },
     status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`

     }
 }
 const ferrari = {
     modelo: 'F240',
     velMax: 324 // shadowing
 }

 const volvo = {
     modelo: 'V40',
     status(){
        return `${this.modelo}: ${super.status()}`
     } 
 }

 Object.setPrototypeOf(ferrari, carro)
 Object.setPrototypeOf(volvo, carro)

 console.log(ferrari)
 console.log(volvo)

 volvo.acelererMais(100)
 console.log(volvo.status())

 ferrari.acelererMais(300)
 console.log(ferrari.status())
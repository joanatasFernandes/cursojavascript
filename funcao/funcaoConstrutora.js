 function carro (velocidademaxima = 200, delta = 5) {
     //atributo privado
     let velocidadeAtual = 0

     //metodo publico 
     this.acelerar = function (){
         if (velocidadeAtual + delta  <= velocidademaxima){
             velocidadeAtual += delta
         } else {
             velocidadeAtual = velocidademaxima
         }
     }
     //metodo publico
     this.getVelocidadeAtual = function () {
         return velocidadeAtual
     }
 }
 const uno =  new carro 
  uno.acelerar()
  console.log(uno.getVelocidadeAtual())

  const ferrrari = new carro(350, 20)
  ferrrari.acelerar()
  ferrrari.acelerar()
  ferrrari.acelerar()
  console.log(ferrrari.getVelocidadeAtual())

  console.log(typeof carro)
  console.log(typeof ferrrari)
function pessoa(){
    this.idade = 0
    const self = this  //o this pode variar , entao podemos driblar usando uma constante apontando para o this.
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new pessoa 


function pessoa (){
    this.idade = 4
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}
 
new pessoa
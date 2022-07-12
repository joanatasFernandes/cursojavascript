// acessando os modulos de terceiros dentro de pastas diferentes
// use o nome dos arquivos de forma correta pois no linux não aceita erro na escrita.
const moduloA  = require('../../moduloA');
console.log(moduloA.ola);

// usando modulos ja existentes no node
const http = require('http')
http.createServer((req, res) => {
    res.write('Bon journ')
    res.end()

}).listen(8080)
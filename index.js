const fs = require('fs')
fs.readFile(
    './hola.txt',
    'utf-8',
    function(err, data) {
        if (err) throw err
        console.log(`El contenido del fichero es este: ${data}`)
    }
)
console.log(`Aqui todavia no tenemos el contenido del fichero`)
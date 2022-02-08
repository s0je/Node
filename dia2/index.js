const readConsole = require ('./promiseReadConsole.js');
const writeAndRead = require ('./promiseWriteAndRead');

readConsole.crearPersona()
.then(objeto =>{
    writeAndRead.crearPromesa(objeto)
})




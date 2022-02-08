const readConsole = require ('./promiseReadConsole.js');
const writeAndRead = require ('./promiseWriteAndRead');

readConsole.crearPersona()
.then(objeto =>{
    return writeAndRead.crearPromesa(objeto)
})
.catch(err=>{
    console.log(err)
})



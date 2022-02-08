const fsPromise = require("fs").promises;


function crearPromesa(persona){
    let wR = new Promise ((resolve,rejects) =>{
        let personaData = JSON.stringify(persona)
    fsPromise.writeFile('persona.json', personaData, 'utf8')
    .then(()=>{
        return fsPromise.readFile('persona.json')
    })
    .then(function(result){
        resolve (console.log(""+result));
    })
    .catch(err =>{
        console.log(err)
    })
    })
    return wR;
}


module.exports = {crearPromesa}

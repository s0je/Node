const fsPromise = require("fs/promises");


let persona = {
                'name': 'Jose',
                'surname': 'Silva',
                'age': 35
                };
function crearPromesa(){

    let personaData = JSON.stringify(persona)
    fsPromise.writeFile('persona.json', personaData, 'utf8')
    .then(()=>{
        return fsPromise.readFile('persona.json')
    .then(function(result){
        console.log(""+result);
        })
    })
    .catch(err =>{
        console.log(err)
    })
}
crearPromesa();

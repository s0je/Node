const fsPromise = require("fs").promises;


let persona = {
                'name': 'Jose',
                'surname': 'Silva',
                'age': 35
                };
async function crearPromesa(){

    let personaData = JSON.stringify(persona);

    try{
        await fsPromise.writeFile('persona.json', personaData, 'utf8')
        console.log("Archivo JSON guardado correctamente");
    }catch (err){
        console.log(err);
    };

    fsPromise.readFile('persona.json')
    .then(function(result){
        console.log(""+result);
    })
    .catch(function(err){
        console.log(err);
    })

}
crearPromesa();
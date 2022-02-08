const fs = require("fs");

let persona = {
                'name': 'Jose',
                'surname': 'Silva',
                'age': 35
                };
function crearObjeto(){

    let personaData = JSON.stringify(persona);

    //CREACION DEL JSON
    fs.writeFile("persona.json", personaData, 'utf8', function (err){
        if (err){
            console.log("Ha ocurrido un error mientras se escribia el archivo JSON"+ err);
        } else{
            console.log("Archivo JSON guardado correctamente");
            fs.readFile('persona.json', 
            function(err,data){
            if(err) throw err;
                console.log(data.toString('utf8'))
        });
        }
    });
}
crearObjeto();
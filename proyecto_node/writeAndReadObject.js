const fs = require("fs");
let personaData;

function crearObjeto(persona){

    personaData = JSON.stringify(persona);
    
    fs.writeFile("persona.json", personaData, 'utf8', function (err){
        if (err){
            console.log("Ha ocurrido un error mientras se escribia el archivo JSON");
        return console.log(err);
        }fs.readFile('persona.json', 
        function(err,data){
            if(err) throw err;
                console.log(data.toString('utf8'))
        });

        console.log("Archivo JSON guardado correctamente");
        });
    

};

module.exports = {crearObjeto};
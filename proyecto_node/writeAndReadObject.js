const fs = require("fs");
let personaData;

function crearObjeto(persona){

    setTimeout(function(){
    fs.writeFile("persona.json", persona, 'utf8', function (err){
        if (err){
            console.log("Ha ocurrido un error mientras se escribia el archivo JSON");
        return console.log(err);
        }

        console.log("Archivo JSON guardado correctamente");
        });
    }, 10000);

    setTimeout(function(){
        fs.readFile('persona.json', 
            function(err,data){
                if(err) throw err;
                    console.log(data.toString('utf8'))
            });
    }, 15000);

};

module.exports = {crearObjeto};
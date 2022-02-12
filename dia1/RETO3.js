//RETO 3
const readline = require("readline").createInterface({input: process.stdin, output: process.stdout});
const fs = require("fs");
let id;
let surname;
let age;
let nuevaPersona = {'name': '', 'surname': '', 'age': ''};

function crearNuevoObjeto(){

    readline.question('Como te llamas?', nombre =>{
        id = nombre;
        readline.question('Cual es su apellido?', apellido =>{
            surname = apellido;
            readline.question('Que edad tiene?', edad =>{
                age = edad;
                readline.close();
                nuevaPersona = {'name': id, 'surname': surname, 'age': age};
    
                let rawData = JSON.stringify(nuevaPersona);
                fs.writeFile("persona.json", rawData, 'utf8', function (err){
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
            })
        }) 
    });    
}

crearNuevoObjeto();
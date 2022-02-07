// RETO 1
// console.log("Mensaje 1");
// setTimeout(function(){
//     console.log("Mensaje 2");
//     setTimeout(function(){
//         console.log("Mensaje 3");
//     })
// }, 3000);

//RETO 2
// const fs = require("fs");

// let persona = {
//                 'name': 'Jose',
//                 'surname': 'Silva',
//                 'age': 35
//                 };
// function crearObjeto(){

//     let personaData = JSON.stringify(persona);

//     //CREACION DEL JSON
//     fs.writeFile("persona.json", personaData, 'utf8', function (err){
//         if (err){
//             console.log("Ha ocurrido un error mientras se escribia el archivo JSON");
//         return console.log(err);
//         }

//     console.log("Archivo JSON guardado correctamente");
//     });


//     fs.readFile('persona.json', 
//         function(err,data){
//             if(err) throw err;
//                 console.log(data.toString('utf8'))
//         });

// }
// crearObjeto();

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
            })
        }) 
    });

   setTimeout(function(){
    nuevaPersona = {'name': id, 'surname': surname, 'age': age};
    
    let rawData = JSON.stringify(nuevaPersona);
    fs.writeFile('persona.json', rawData ,'utf8', function (err){
                if (err){
                    console.log("Ha ocurrido un error mientras se escribia el archivo JSON");
                return console.log(err);
                }});
    
    fs.readFile('persona.json', 
        function(err,data){
            if(err) throw err;
                console.log(data.toString('utf8'))
        });
    readline.close();
   }, 10000); 
    
}

crearNuevoObjeto();
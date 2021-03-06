const { stdin, stdout } = require("process");
const { callbackify } = require("util");

const readline = require("readline").createInterface({input: process.stdin, output: process.stdout});
let id;
let surname;
let age;
let nuevaPersona = {'name': '', 'surname': '', 'age': ''};

function crearNuevoObjeto(callback){

    readline.question('Como te llamas?', nombre =>{
        id = nombre;
        readline.question('Cual es su apellido?', apellido =>{
            surname = apellido;
            readline.question('Que edad tiene?', edad =>{
                age = edad;
                readline.close();
                nuevaPersona = {'name': id, 'surname': surname, 'age': age};
                callback(nuevaPersona);
            })
        }) 
    });
}



module.exports = {crearNuevoObjeto};
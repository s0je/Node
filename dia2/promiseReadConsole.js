const readline = require("readline");

let persona = {
                'name': '',
                'surname': '',
                'age': ''
                };


function crearPersona (){
    let rC = new Promise ((resolve,reject) =>{
        pregunta('como te llamas?')
        .then(id =>{
            persona.name = id;
            return pregunta('Cual es tu apellido?')
        })
        .then(apellido =>{
                persona.surname = apellido;
                return pregunta('Que edad tienes?')
        })
        .then(edad =>{
                    persona.age = edad;
                    resolve (persona);
        })
    })
    return rC;
    
}
function pregunta(pregunta){
    let question = new Promise((resolve,reject)=>{
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
                
    rl.question(pregunta, data =>{
        resolve(data);
        rl.close();    
    })     
    })
    return question;
}

module.exports = {pregunta, crearPersona}
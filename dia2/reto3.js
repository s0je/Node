const readline = require("readline");
const fsPromise = require("fs/promises");

let persona = {
                'name': '',
                'surname': '',
                'age': ''
                };

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
            return fsPromise.writeFile('persona.json', JSON.stringify(persona), 'utf8')
})
.then(()=>{
    return fsPromise.readFile('persona.json')
.then(function(result){
    console.log(""+result);
    })
})
.catch(err =>{
    console.log(err)
})

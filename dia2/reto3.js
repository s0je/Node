const readline = require("readline");
const fsPromise = require("fs/promises");

let id;
let surname;
let age;
let persona = {
                'name': '',
                'surname': '',
                'age': ''
                };

function pregunta(){
    const question = new Promise((resolve)=>{
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('Como te llamas?', nombre =>{
            resolve(nombre);
            rl.question('Cual es su apellido?', apellido =>{
                resolve(apellido);
                rl.question('Que edad tiene?', edad =>{
                    resolve(edad);
                    rl.close();
                })
                .then(data =>{
                    age = data;
                    return age;
                })
            })
            .then(data =>{
                surname = data;
                return surname
            })
        })
        .then(data =>{
            id = data;
            return id;
        })
        .then(() =>{
            question = {'name': id, 'surname': surname, 'age': age};
        })
        
        return question;    
    })
    // .then(data =>{
    //     data = {'name': id, 'surname': surname, 'age': age};
    //     console.log(data);
    // })
    // .catch(err =>{
    //     console.log(err)
    // })    
}

pregunta();
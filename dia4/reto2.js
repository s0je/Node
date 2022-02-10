const { response } = require("express");
const express       = require("express");
const myLib = require("./profesional.js");
let Professional = myLib.Professional;
const app           = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


let DiCaprio = new Professional ("https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_UY317_CR10,0,214,317_AL_.jpg","Leonar Dicaprio", 47, "Masculino", 183, 75, "castaño", "caucasico", false, "americano", 7, "Actor");
let Denzel = new   Professional ("https://m.media-amazon.com/images/M/MV5BMjE5NDU2Mzc3MV5BMl5BanBnXkFtZTcwNjAwNTE5OQ@@._V1_UY317_CR12,0,214,317_AL_.jpg","Denzel Washington", 67, "Masculino", 185, 80, "negro", "afroamericano", false, "americano", 2, "Actor");
let Almodovar = new Professional ("https://m.media-amazon.com/images/M/MV5BMGM2NTk2MDEtN2Y4Ni00YzNjLWE1NDQtMWM4MjJlZWI1NmU2XkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_UY317_CR12,0,214,317_AL_.jpg","Pedro Almodovar",72, "Masculino", 177, 85, "blanco", "caucasico", false, "español", 2, "Director");
let Tarantino = new Professional ("https://m.media-amazon.com/images/M/MV5BMTgyMjI3ODA3Nl5BMl5BanBnXkFtZTcwNzY2MDYxOQ@@._V1_UX214_CR0,0,214,317_AL_.jpg","Quentin Tarantino",58, "Masculino", 188, 96, "blanco", "caucasico", false, "americano", 1, "Director");
let JamieFoxx = new   Professional ("https://m.media-amazon.com/images/M/MV5BMTkyNjY1NDg3NF5BMl5BanBnXkFtZTgwNjA2MTg0MzE@._V1_UY317_CR12,0,214,317_AL_.jpg","Jamie Foxx", 54, "Masculino", 175, 82, "negro", "afroamericano", false, "americano", 2, "Actor");
let Jennifer = new Professional ("https://m.media-amazon.com/images/M/MV5BMTY0OTY3ODA3OV5BMl5BanBnXkFtZTcwMzMyMzQ1NQ@@._V1_UY317_CR32,0,214,317_AL_.jpg","Jennifer Lopez", 56, "Femenino", 178, 75, "castaño", "latina", false, "americano", 0, "Actriz");
let actores = [DiCaprio, Denzel,Almodovar, Tarantino, JamieFoxx, Jennifer];
let profesional = new Professional;

app.get("/", 
        function(request, response)
        {
            let respuesta = {error: true, codigo: 200, mensaje: 'Punto de inicio'};
            response.send(respuesta);
        }
        );
//GET/professionales
app.get("/profesionales", 
            function(request,response)
            {
                let id = request.query.id;
                let respuesta = '';
                if(id == null)
                {
                    for(let i =0; i<actores.length; i++){

                        respuesta += actores[i].printAll();
                    }
                } else if(id != null && id <= actores.length && id >= 0)
                {
                respuesta = actores[id].printAll();
                }else {
                respuesta = {error: true, codigo: 200, mensaje: "El profesional no existe"};
                }

                response.send(respuesta);

            });
// //POST/professionales
app.post("/profesionales",
            function(request,response)
            {
                let respuesta;

                profesional = new Professional (
                    request.body.image,
                    request.body.name,
                    request.body.age,
                    request.body.genre,
                    request.body.weight,
                    request.body.height,
                    request.body.hairColor,
                    request.body.race,
                    request.body.isRetired,
                    request.body.nationality,
                    request.body.oscarsNumber,
                    request.body.profesion
                );
                
                actores.push(profesional)
                respuesta = {error: false, codigo: 200, 
                        mensaje: 'Nuevo profesional añadido',resultado: actores};

                response.send(respuesta);
            });
// //PUT/profesionales
app.put("/profesionales",
            function(request,response)
            {
                let respuesta;
                let id = request.query.id;
                if(id != null && id <= actores.length && id >= 0)
                {
                        
                    actores[id].image = request.body.image;
                    actores[id].name = request.body.name;
                    actores[id].age = request.body.age;
                    actores[id].genre = request.body.genre;
                    actores[id].weight = request.body.weight;
                    actores[id].height = request.body.height;
                    actores[id].hairColor = request.body.hairColor;
                    actores[id].race = request.body.race;
                    actores[id].isRetired = request.body.isRetired;
                    actores[id].nationality = request.body.nationality;
                    actores[id].oscarsNumber = request.body.oscarsNumber;
                    actores[id].profesion = request.body.profesion;
                    
                    respuesta   = {error: false, codigo: 200, 
                        mensaje: 'Profesional actualizado',resultado: actores[id]};
                }else{
                    respuesta = {error: true, codigo: 200,
                                mensaje: "Profesional no existe", resultado:actores};
                }

                response.send(respuesta);
            });
// //DEL/profesional
app.delete("/profesionales",
            function(request,response){
                let respuesta;
                let id = request.query.id;
                let temp;
                if(id != null && id <= actores.length && id >= 0)
                {
                    temp = actores.splice(id,1);
                    respuesta = {error: false, codigo:200,
                                mensaje: 'Profesional borrado', resultado: temp};
                }else{
                    respuesta = {error: true, codigo:200,
                                mensaje: 'El profesional no existe', resultado:actores};
                }
                response.send(respuesta);
            });

app.use(function(req,res,next)
        {
            respuesta = {error: true, codigo: 404, mensaje: 'URL no encontrada'};
            res.status(404).send(respuesta);
        })

app.listen(3000);
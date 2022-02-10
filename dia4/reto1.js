const express       = require("express");
const myLib = require("./profesional.js");
let Professional = myLib.Professional;
const app           = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let profesional = null;

app.get("/", 
        function(request, response)
        {
            let respuesta = {error: true, codigo: 200, mensaje: 'Punto de inicio'};
            response.send(respuesta);
        }
        );
//GET/professional
app.get("/profesional", 
            function(request,response)
            {
                let respuesta;
                if(profesional != null)
                {
                    respuesta = profesional;
                }else {
                    respuesta = {error: true, codigo: 200, mensaje: "El profesional no existe"}
                }
                response.send(respuesta);

            });
//POST/professional
app.post("/profesional",
            function(request,response)
            {
                let respuesta;
                if(profesional === null)
                {
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
                    )
                    respuesta   = {error: false, codigo: 200, 
                        mensaje: 'Profesional creado',resultado: profesional};
                }else{
                    respuesta = {error: true, codigo: 200,
                                mensaje: "Profesional ya existe", resultado:null};
                }

                response.send(respuesta);
            });
//PUT/profesional
app.put("/profesional",
            function(request,response)
            {
                let respuesta;
                if(profesional != null)
                {
                        
                    profesional.image = request.body.image;
                    profesional.name = request.body.name;
                    profesional.age = request.body.age;
                    profesional.genre = request.body.genre;
                    profesional.weight = request.body.weight;
                    profesional.height = request.body.height;
                    profesional.hairColor = request.body.hairColor;
                    profesional.race = request.body.race;
                    profesional.isRetired = request.body.isRetired;
                    profesional.nationality = request.body.nationality;
                    profesional.oscarsNumber = request.body.oscarsNumber;
                    profesional.profesion = request.body.profesion;
                    
                    respuesta   = {error: false, codigo: 200, 
                        mensaje: 'Profesional actualizado',resultado: profesional};
                }else{
                    respuesta = {error: true, codigo: 200,
                                mensaje: "Profesional no existe", resultado:profesional};
                }

                response.send(respuesta);
            });
//DEL/profesional
app.delete("/profesional",
            function(request,response){
                let respuesta;
                if(profesional != null)
                {
                    profesional = null;
                    respuesta = {error: false, codigo:200,
                                mensaje: 'Profesional borrado', resultado: profesional};
                }else{
                    respuesta = {error: true, codigo:200,
                                mensaje: 'El profesional no existe', resultado:profesional};
                }
                response.send(respuesta);
            });

app.use(function(req,res,next)
        {
            respuesta = {error: true, codigo: 404, mensaje: 'URL no encontrada'};
            res.status(404).send(respuesta);
        })

app.listen(3000);
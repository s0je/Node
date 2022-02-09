const express = require("express");
const app = express();

app.get("/", function(request,response)
{
    console.log('Peticón recibida del cliente')
    console.log('Peticion URL: '+ request.url)
    console.log('Peticion de Metodo: '+request.method)
    console.log('Peticion cabecera: '+request.headers['user-agent'])
    response.type("application/json").status(200).json({'ok':'true','message':'Recibido!'})
});

app.get("/bye", function(request,response)
{
    console.log('Peticón recibida del cliente')
    console.log('Peticion URL: '+ request.url)
    console.log('Peticion de Metodo: '+request.method)
    console.log('Peticion cabecera: '+request.headers['user-agent'])
    response.type("application/json").status(200).json({'ok':'true','message':'Adios!'})
});

app.listen(4000);
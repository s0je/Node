const http = require('http');

const server = http.createServer(function(request, response)
{
    console.log('Peticón recibida del cliente')
    console.log('Peticion URL: '+ request.url)
    console.log('Peticion de Metodo: '+request.method)
    console.log('Peticion cabecera: '+request.headers['content-type'])
    console.log('Peticion cabecera: '+request.headers['content-length'])
    console.log('Peticion cabecera: '+request.headers['user-agent'])
    if(request.url.includes('/bye')){
        response.writeHead(200,{'Content-Type':'application/json'});
        response.write(JSON.stringify({'ok':'true','message':'Adios!'}));
        response.end();
    }else{
    response.writeHead(200,{'Content-Type':'application/json'});
    response.write(JSON.stringify({'ok':'true','message':'Recibido!'}));
    response.end();
    }
});

server.listen(3000);
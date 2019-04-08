var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    
    if(req.url === '/'){
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }

    else if(req.url === '/api') {
        res.writeHead(200, {'Content-Type':'application/json'});
        var obj = {
        firstname: 'jhon',
        lastname: 'doe'
        };

        res.end(JSON.stringify(obj)); //Serialización transformar un objeto a un formato que pueda manejarse
    }

    else {
        res.writeHead(404);
        res.end();
    }
    
}).listen(1337, '127.0.0.1');
var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {

    res.writeHead(200, {'Content-Type':'application/json'});
    var obj = {
        firstname: 'jhon',
        lastname: 'doe'
    };
    res.end(JSON.stringify(obj)); //Serialización transformar un objeto a un formato que pueda manejarse

}).listen(1337, '127.0.0.1'); //port
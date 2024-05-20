const http = require('http');
const port = 3000;

http.createServer((request, response) =>{
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.write("Hello from Node.js");
    response.end();
}).listen(port);
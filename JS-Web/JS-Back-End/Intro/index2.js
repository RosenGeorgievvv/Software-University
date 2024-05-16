const http = require('http');

const server = http.createServer((request, response) =>{
    console.log(request.method);
    console.log(request.url);
    console.log(request.headers);

    response.write();
    response.end();
})

server.listen(3000);
const http = require('http');

const server = http.createServer((request, response) =>{
    console.log('Request received');
})

server.listen(3000);
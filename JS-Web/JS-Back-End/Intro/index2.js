const http = require('http');

const server = http.createServer(() =>{
    console.log('Request received');
})

server.listen(3000);
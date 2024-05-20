const fs = require('fs');
const server = require('http').createServer();

server.on('request', (request, response) =>{
    const src = fs.createReadStream('./bigfile.txt');
    src.pipe(response);
});
server.listen(7000);
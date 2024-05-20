const fs = require('fs');
const server = require('http').createServer();

server.on('request', (response, request) =>{
    const src = fs.createReadStream('./bigfile.txt');
    src.on('data', data => response.write(data));
    src.on('end', () => response.end());
});

server.listen(6000);
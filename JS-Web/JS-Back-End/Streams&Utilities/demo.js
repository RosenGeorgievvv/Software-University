const http = require('http');

http.createServer((req, res) =>{
    res.write('Hi');
    res.end();
}).listen(3000);

console.log('My server is running on port 3000')
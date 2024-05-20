const http = require('http');

http.createServer((request, response) =>{
    if(request.method === 'POST'){
        let body = '';
        request.on('data', data => {body += data});
        request.on('end', () =>{
            console.log(body);
        });
    }
}).listen(5000);
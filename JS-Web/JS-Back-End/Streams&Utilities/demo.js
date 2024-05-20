const http = require('http');
const url = require('url');
const port = 3000;

http.createServer((req, res) =>{
let path = url.parse(req['url']).pathname;
if(path === '/'){
    console.log('Welcome to the home page!')
}
}).listen(port);

console.log('My server is running on port 3000')
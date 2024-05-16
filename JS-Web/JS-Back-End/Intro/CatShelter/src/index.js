const http = require("http");

http.createServer((req, res) => {
  res.statusCode = 204;
  res.end();
}).listen(3000);
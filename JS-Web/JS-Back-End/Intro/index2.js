const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request.method);
  console.log(request.url);
  console.log(request.headers);

  if (request.url == "/favicon.ico") {
    response.statusCode = 404;
    response.end();
  } else {
    response.write("Hello World!");
    response.end();
  }
});

server.listen(3000);

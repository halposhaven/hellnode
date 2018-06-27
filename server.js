
var http = require('http');
var handleRequest = function(request, response) {
  response.writeHead(200);
  response.end("it might be...it could be...");
}
var www = http.createServer(handleRequest);
www.listen(8080);


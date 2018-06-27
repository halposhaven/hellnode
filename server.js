
var http = require('http');
var handleRequest = function(request, response) {
  response.writeHead(200);
  response.end("who dosn't love a good live update");
}
var www = http.createServer(handleRequest);
www.listen(8080);


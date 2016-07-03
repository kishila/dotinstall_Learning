var http = require('http');
var server = http.createServer();

server.on('request', function(req, res) {
  res.writeHead(200, {'Cotent-Type': 'text/plain'});
  res.write('hello world');
  res.end();
});
server.listen(1337, '192.168.61.100');
console.log("server listening...");

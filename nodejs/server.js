var http = require('http');
  fs = require('fs');
var settings = require('./settings');
console.log(settings);
var server = http.createServer();

server.on('request', function(req, res) {
  fs.readFile(__dirname + '/public_html/hello.html', 'utf-8', function(err, date) {
    if (err) {
      res.writeHead(404, {'Cotent-Type': 'text/plain'});
      res.write("not found!");
      return res.end();
    }
    res.writeHead(200, {'Cotent-Type': 'text/html'});
    res.write(date);
    res.end();
  });
});
server.listen(settings.port, settings.host);
console.log("server listening...");

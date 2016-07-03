var http = require('http');
  fs = require('fs');
  ejs = require('ejs');
var settings = require('./settings');
console.log(settings);
var server = http.createServer();
var template = fs.readFileSync(__dirname + '/public_html/hello.ejs', 'utf-8');
var n = 0;

server.on('request', function(req, res) {
  n++;
  var date = ejs.render(template, {
    title: "hello",
    content: "<strong>World!</strong>",
    n: n
  });
  res.writeHead(200, {'Cotent-Type': 'text/html'});
  res.write(date);
  res.end();
});
server.listen(settings.port, settings.host);
console.log("server listening...");

var http = require('http');
  fs = require('fs');
  ejs = require('ejs');
  qs = require('querystring');
var settings = require('./settings');
console.log(settings);
var server = http.createServer();
var template = fs.readFileSync(__dirname + '/public_html/bbs.ejs', 'utf-8');
var posts = [];
function renderForm(posts, res) {
  var date = ejs.render(template, {
    posts: posts
  });
  res.writeHead(200, {'Cotent-Type': 'text/html'});
  res.write(date);
  res.end();
}

server.on('request', function(req, res) {
  if(req.method === 'Post'){
    req.date = "";
    req.on("readable", function() {
      req.date += read.read();
    });
    req.on("end", function(){

    })
  } else {
    renderForm(posts, res);
  }
});
server.listen(settings.port, settings.host);
console.log("server listening...");

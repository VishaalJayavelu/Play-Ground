const http = require('http'); 
const fs = require('fs');

http.createServer(function (req, res) {
      res.writeHead(200, {'Content-type': 'text/html'}); 
      res.write(`<html><body><div>Hello World</div></body></html>`);           
      return res.end();
 }).listen(8080);
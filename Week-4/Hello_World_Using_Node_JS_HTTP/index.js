const http = require('http'); 
const fs = require('fs');

const PORT1 = 5050;

http.createServer(function (req, res) {
     res.writeHead(200, {'Content-type': 'text/Plain'}); 
     res.write('Hello World');           
     res.end();
 }).listen(PORT1, ()=>{
     console.log(`Listening on port ${PORT1}`);
 });

 const PORT2 = 6060;

http.createServer(function (req, res) {
     res.writeHead(200, {'Content-type': 'application/json'}); 
     res.write(JSON.stringify({id:1,Text:'Hello World',}));           
     res.end();
 }).listen(PORT2, ()=>{
     console.log(`Listening on port ${PORT2}`);
 });
 
const PORT3 = 7070;

http.createServer(function (req, res) {
     res.writeHead(200, {'Content-type': 'text/Plain'});      
     res.end('Hello World');
 }).listen(PORT3, ()=>{
     console.log(`Listening on port ${PORT3}`);
 });

const PORT4 = 8080;

fs.readFile('./index.html', function (err,html) {
          if (err) throw err;
          http.createServer(function (req, res) {
               res.writeHead(200, {'Content-type': 'text/html'});
               res.end(html);
           }).listen(PORT4, ()=>{
               console.log(`Listening on port ${PORT4}`);
           });
     });

 
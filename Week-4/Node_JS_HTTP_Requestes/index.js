const http = require('http'); 

const PORT = 5050;

const   server=http.createServer();
server.on('request', (req, res)=> {
     if(req.url=='/'){
          res.writeHead(200, {'Content-type': 'text/Plain'}); 
          res.write('Hello World');           
          res.end();
     }else if(req.url=='/html'){
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/html');
          res.write('<html><body><ul><li>html</li></ul></body></html>');
          res.end();
     }else{
          res.statusCode = 404;
          res.end('Not Found');
     }
});

server.listen(PORT, ()=>{
     console.log(`Listening on port ${PORT}`);
});  

const http = require('http'); 

const PORT = 5050;

const list=[
     {
          id:0,
          name:"testing done",
     },
     {
          id:1,
          name:"testing",
     },
     {
          id:2,
          name:"tested",
     },
     {
          id:3,
          name:"need to test",
     },
];

const server=http.createServer();
server.on('request', (req, res)=> {
     const item = req.url.split('/');
     if(req.method == 'POST' && item[1]=='list'){
          req.on('data', (data)=>{
               const lists = data.toString();
               console.log(lists);
               list.push(JSON.parse(lists));          
          });
     }else if(req.method == 'GET' && item[1]==='list'){
          res.writeHead(200, {'Content-type': 'application/json'}); 
          if(item.length===3){
               const index = Number(item[2]);
               res.write(JSON.stringify(list[index]));
          }else  {
               res.write(JSON.stringify(list));           
          }
          res.end();
     }else if(req.method == 'GET' && item[1]==='html'){
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
//write in browser console
//fetch('http://localhost:5050/list',{method:'POST',body:JSON.stringify({id:4,name:'Vishaal J'})});
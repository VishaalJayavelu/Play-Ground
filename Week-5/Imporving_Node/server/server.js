const express = require('express');
const cluster = require('cluster');

const app = express();

function delay(duration) {
     const stime=Date.now();
     while(Date.now()-stime<duration){

     }
}

app.get('/', (req, res) =>{
     res.send(`Welcome to backend! ${process.pid}`);
});

app.get('/timers', (req, res)=>{
     delay(9000);
     res.send(`Ding Ding! ${process.pid}`);
});

if (cluster.isMaster) {
     console.log('Mather has been Started');
     cluster.fork();
     cluster.fork();
}else{
     console.log('Worker process Started');  
     app.listen(8000,()=>{
          console.log('listening on port 8000');
     });

}

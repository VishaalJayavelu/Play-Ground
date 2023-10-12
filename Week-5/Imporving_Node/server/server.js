const express = require('express');
const cluster = require('cluster');
const os = require('os');

const app = express();

function delay(duration) {
     const stime=Date.now();
     while(Date.now()-stime<duration){

     }
} 

app.get('/', (req, res) =>{
     res.send(`Welcome to backend! ${process.pid}`);
});

app.get('/timer', (req, res)=>{
     delay(9000);
     res.send(`Beep Beep! ${process.pid}`);
});

console.log(`running server.js.....`)
if(cluster.isMaster){
     console.log('Master has been Started');
     console.log(os.cpus().length)
     const numWorker = os.cpus().length;
     for(let i=0; i<numWorker;i++){
          cluster.fork();
     }
}else{
     console.log(`Worker process Started ${process.pid}`);       
     app.listen(8000);
}

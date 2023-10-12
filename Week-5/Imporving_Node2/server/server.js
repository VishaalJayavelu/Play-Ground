const express = require('express');
const os = require('os');
const {isMainThread,workerData ,Worker} = require('worker_threads');

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
     res.send(`Beep Beep Beep! ${process.pid}`);
});

if(isMainThread) {
     console.log(`Main Thread! Process ID:${process.pid}`);
     console.log(__filename)
     console.log(workerData)
     new Worker(__filename,{
          workerData: [7,6,2,3]
     });
     console.log(__filename)
     console.log(workerData)
     new Worker(__filename,{
          workerData:[1,3,5,6]
     });
     console.log(__filename)
     console.log(workerData)
}else{
     console.log(`Worker Thread! Process ID:${process.pid}`);
     console.log(`${workerData} sorted is ${workerData.sort()}`);
}

console.log(`running server.js.....`)
console.log(`Worker process Started ${process.pid}`);       
app.listen(8000);

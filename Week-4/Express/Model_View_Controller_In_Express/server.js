const express = require('express');

const listRouter = require('./routes/list.router');
const messagesRouter = require('./routes/messages.route');

const app= express();
const PORT =5050;

app.use((req,res,next)=>{
     const start = Date.now();
     next();
     const difftime = Date.now() - start;
     console.log(`${req.method} ${req.baseUrl}${req.url} ${difftime}ms`);
});

app.use(express.json());

app.use('/lists',listRouter);

app.use('/messages',messagesRouter);

app.listen(PORT,()=>{
     console.log('listening on port : '+PORT);
});


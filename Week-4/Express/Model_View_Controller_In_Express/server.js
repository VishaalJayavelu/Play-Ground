const express = require('express');
const messagesController = require('./controllers/messages.controller');
const listController = require('./controllers/list.controller');

const app= express();
const PORT =5050;


app.use((req,res,next)=>{
     const start = Date.now();
     next();
     const difftime = Date.now() - start;
     console.log(`${req.method} ${req.url} ${difftime}ms`);
});

app.use(express.json());

app.post('/list', listController.postList);

app.get('/list',listController.getList);

app.get('/list/:id',listController.getListId);

app.get('/messages',messagesController.getmessages);

app.post('/messages',messagesController.postmessages);

app.listen(PORT,()=>{
     console.log('listening on port : '+PORT);
});


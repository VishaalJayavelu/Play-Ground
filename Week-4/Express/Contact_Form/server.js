const express = require('express');

const formsRouter = require('./routes/forms.router');
const contactsRouter = require('./routes/contacts.route');

const app= express();
const PORT =5050;

app.use((req,res,next)=>{
     const start = Date.now();
     next();
     const difftime = Date.now() - start;
     console.log(`${req.method} ${req.baseUrl}${req.url} ${difftime}ms`);
});

app.use(express.json());

app.use('/forms',formsRouter);

app.use('/contacts',contactsRouter);

app.listen(PORT,()=>{
     console.log('listening on port : '+PORT);
});


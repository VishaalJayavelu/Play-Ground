const express = require('express');
const path = require('path');

const listRouter = require('./routes/list.router');
const messagesRouter = require('./routes/messages.route');

const app= express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

const PORT =5050;

app.use((req,res,next)=>{
     const start = Date.now();
     next();
     const difftime = Date.now() - start;
     console.log(`${req.method} ${req.originalUrl} ${difftime}ms`);
});


app.use(express.json());


app.use('/lists',listRouter);
app.use('/messages',messagesRouter);
app.use("/site",express.static(path.join(__dirname,'public')));

app.use('/',(req, res)=>{
     res.render('index',{
          title: 'brothers',
          caption: 'Full Metal Alchamest',
     })
});
app.listen(PORT,()=>{
     console.log('listening on port : '+PORT);
     console.log(`http://localhost:${PORT}`);
});


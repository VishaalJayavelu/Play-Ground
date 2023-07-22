const express = require('express');

const app= express();

const PORT =5050;

app.get('/',(req,res) => {
     res.send({
          id: 0,
          name :"vishaal",
     });
});

app.get('/messages',(req,res) => {
     res.send('<ul><li>hi buddy</li></ul>');
});

app.post('/messages',(req,res) => {
     console.log('updates');
});

app.listen(PORT,()=>{
     console.log('listening on port : '+PORT);
});


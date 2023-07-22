const express = require('express');

const app= express();
const PORT =5050;

const lists =[{
     id: 0,
     name :"vishaal",
},
{
     id: 1,
     name :"hello",
},
{
     id: 2,
     name :"V",
}];

app.get('/list',(req,res) => {
     res.json(lists);
});

app.get('/list/:id',(req,res) => {
     const id=req.params.id;
     const ele=lists[id];
     if(ele){
          res.status(200).json(ele);
     }else{
          res.status(404).json({
               error :"Not Found in list",
          });
     }
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


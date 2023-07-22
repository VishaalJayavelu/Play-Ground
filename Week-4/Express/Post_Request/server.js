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

app.use((req,res,next)=>{
     const start = Date.now();
     next();
     const difftime = Date.now() - start;
     console.log(`${req.method} ${req.url} ${difftime}ms`);
});

app.use(express.json());

app.post('/list', (req, res)=>{
     
     if(!req.body.name){
          return res.status(404).json({
               error: "Missing name"
          })
     }
     
     const newlist = {
          name : req.body.name,
          id: lists.length,
     };
     
     lists.push(newlist);
     res.json(newlist);
});

app.get('/list',(req,res) => {
     res.status(200).json(lists);
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
     res.status(200).send('<ul><li>hi buddy</li></ul>');
});

app.post('/messages',(req,res) => {
     console.log('updates');
});

app.listen(PORT,()=>{
     console.log('listening on port : '+PORT);
});


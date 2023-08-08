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
     let query = req.query;
     let a='<p>';
     if(isEmpty(query)){
          a+='<h1>All elements in the List</h1>';
          for(let i=0;i<lists.length;i++){
               a+=`<div>{"id" : ${lists[i].id} , "name" : "${lists[i].name}"}</div>`;
          }
     }
     if(!isEmpty(req.query.id)&&isEmpty(req.query.name)){
          console.log(req.query.id);
          console.log(req.query.name);
          a+=`<h1>Requiered Element</h1><div>{"id" : ${lists[req.query.id].id} , "name" : "${lists[req.query.id].name}"}</div>`;
     }
     if(!isEmpty(req.query.name)&&isEmpty(req.query.id)){
          
          console.log(req.query.id);
          console.log(req.query.name);
          
          for(let i=0; i<lists.length; i++){
               if(lists[i].name==req.query.name){
                    a+=`<h1>Requiered Element</h1><div>{"id" : ${lists[i].id} , "name" : "${lists[i].name}"}</div>`;
               }
          }
     }

     if(!isEmpty(req.query.id)&&!isEmpty(req.query.name)){
          console.log(req.query.name, req.query.id);
          
          for(let i=0; i<lists.length; i++){
               if(lists[i].name==req.query.name){
                    if(lists[i].id==req.query.id){                        
                         a+=`<h1>Requiered Element</h1><div>{"id" : ${lists[i].id} , "name" : "${lists[i].name}"}</div>`;
                    }else{
                         a+=`<h1>Requiered Element</h1><div>{"id" : ${lists[req.query.id].id} , "name" : "${lists[req.query.id].name}"},</div><div>{"id" : ${lists[i].id} , "name" : "${lists[i].name}"}</div>`;
                    }
                    break;
               }
          }
     }
     a+='</p>';
     console.log(a);
     return res.status(200).send(a);
});

app.get('/list/:id',(req,res) => {
     const id=req.params.id;
     const ele=lists[id];
     if(ele){
          res.status(200).json(ele);
     }else{
          res.status(404).send("Not Found in list");
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

function isEmpty(obj) {
    if (obj == null) return true;
    if (obj.length && obj.length > 0)    return false;
    if (obj.length === 0)  return true;
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }
 
    return true;
}
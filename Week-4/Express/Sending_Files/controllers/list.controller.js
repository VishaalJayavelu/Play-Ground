const list = require('../models/list.models');

function postList(req, res){
     
     if(!req.body.name){
          return res.status(404).json({
               error: "Missing name"
          })
     }
     
     const newlist = {
          id: list.length,
          name : req.body.name,
     };
     
     list.push(newlist);
     res.json(newlist);
}

function getListId(req,res) {
     const id=req.params.id;
     const ele=list[id];
     if(ele){
          res.status(200).json(ele);
     }else{
          res.status(404).json({
               error :"Not Found in list",
          });
     }
}

function getList(req,res) {
     res.status(200).json(list);
}

module.exports ={
     postList,
     getList,
     getListId,
}
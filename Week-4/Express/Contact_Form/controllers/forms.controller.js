const list = require('../models/list.models');

function getFormId(req,res) {
     const id=req.params.id;
     const ele=list[id];
     if(ele){
          res.status(200).send(`Name:${ele.name}<br>Phone No:${ele.phone}`);     
     }else{
          res.status(404).json({
               error :"Not Found in list",
          });
     }
}

function getForm(req,res) {
     let details="";
     for (let i=0;i<list.length;i++){
          const ele = list[i];
          details=details.concat(`Name:${ele.name}<br>Phone No:${ele.phone}<br><br>`);
     }
     res.status(200).send(`${details}`);
}

module.exports ={
     getForm,
     getFormId,
}
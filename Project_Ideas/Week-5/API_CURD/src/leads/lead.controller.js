import lead from'./lead.js';

async function findAllLead(req, res){
     const findLead = await lead.find()
     .then((data)=>{
          if(!data){
               res.json('cannot find any leads!')
          }
          res.status(200).send(data)
     })
     .catch((err)=>{
          res.status(500).json({error:err})
     })
}

async function postLead(req, res){
     console.log(req.body)
     let count = await lead.countDocuments()
     count++
     const newLead = new lead({
          Id: count,
          name : req.body.name,
          lead_created : Date.now(),
     })
     await newLead
     .save()
     .then((data)=>{
          if(!data){
               res.json('lead cannot be post')
          }
          res.send(data)
     }).catch((err)=>{
          console.log(err);
     })
}
async function editLead(req, res){
     console.log(req.body)
     console.log(req.params)
     let count = await lead.countDocuments()
     if(count>0){
          try{
               const filter = { Id: req.params.id };
               
               const options = { upsert: true };
               const updateDoc = {
                    $set: {
                         name: req.body.name,
                    },
               };
               const result = await lead.updateOne(filter, updateDoc, options)
               .then((data)=>{
                    if(!data){
                    res.json('data cannot be updated')
                    }
                    res.status(200).json({msg:'data updated Succesfully',data})
               })
               .catch((err)=>{
                    res.status(500).json({error:err})
               })
               
          }catch(e){
               console.log(e.message);
          }
     }else{
          res.json('data cannot be updated')
     }
}
async function deleteLead(req, res){
     console.log(req.params)
     if(req.params.id ==='all'){
          try{
               const result = await lead.deleteMany({})
               .then((data)=>{
                    if(!data){
                    res.json('data cannot be updated')
                    }
                    res.status(200).json({msg:'data updated Succesfully',data})
               })
               .catch((err)=>{
                    res.status(500).json({error:err})
               })
               
          }catch(e){
               console.log(e.message);
          }
     }else{
          try{
               const result = await lead.deleteOne({Id : req.params.id})
               .then((data)=>{
                    if(!data){
                    res.json('data cannot be updated')
                    }
                    res.status(200).json({msg:'data updated Succesfully',data})
               })
               .catch((err)=>{
                    res.status(500).json({error:err})
               })
               
          }catch(e){
               console.log(e.message);
          }
     }
}

async function deleteAllLead(req, res){
     console.log(req.params)
     
}

 export {
     findAllLead,
     postLead,
     editLead,
     deleteLead,
     deleteAllLead
 }
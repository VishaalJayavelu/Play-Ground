const list = require('../models/list.models');

function getcontacts(req,res) {
     res.status(200).send('<form method="post" action="/contacts" enctype="multipart/form-data><label for="name">Enter the name here: <input type="text" name="name"> </input> </label><br> <br> <label for="phone">Enter the phone no here:<input type="number" name="phone"> </input> </label> <br><br> <input type="submit" value="Add to Contact"> </form>');
}

function postcontacts(req,res) {
     console.log('updates');
     if(!req.body.name&&!req.body.phone){
          return res.status(404).json({
               error: "Missing name"
          })
     }
     
     const newlist = {
          id: list.length,
          name : req.body.name,
          phone: req.body.phone,
     };

     res.status(200).send(`Name:${req.body.name}\nPhone No:${req.body.phone}\nHas been stored with id:${list.length}`);     
     list.push(newlist);

}

module.exports = {
     getcontacts,
     postcontacts,
}
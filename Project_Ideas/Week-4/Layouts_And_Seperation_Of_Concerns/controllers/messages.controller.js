const path = require('path');

function getmessages(req,res) {
     res.render('messages',{
          title : 'messages to me',
          messages : 'hello'
     });
     //res.sendFile(path.join(__dirname,"..","public","images","fullMetal.jpg"));
     //res.status(200).send('<ul><li>hi buddy</li></ul>');
}

function postmessages(req,res) {
     console.log('updates');
}

module.exports = {
     getmessages,
     postmessages,
}
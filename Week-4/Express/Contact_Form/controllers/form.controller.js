const contactsList = require("../models/contacts.model");
const fs = require('fs');
const path = require('path');

function getForm(req, res) {
     create();
     res.render('contacts',{
          title : 'Contact Form',
     });     
}

function postForm(req, res) {
     console.log(contactsList);
     contactsList.push(req.body)
     create();
     res.render('contacts',{
          title : 'Contact Form',
          messages : 'Contact added successfully',
          //Object.keys(contactsList[0])+Object.values(contactsList[0]),
     });
}

function  create(){
     const dir=path.join(__dirname,'../views/contacts.hbs');
     const dir2=path.join(__dirname,'../models/contacts.model.js');
     let text='const contactsList = [';
     let tabel=``;

     for( let i=0; i<contactsList.length; i++ ){
          tabel+=`<tr>\n<td>${contactsList[i].fname} ${contactsList[i].lname}</td>\n<td>${contactsList[i].mobileno}</td>\n<td>${contactsList[i].email}</td>\n<td>${contactsList[i].reason}</td>\n</tr>\n`;
          text+=`{\nfname:'${contactsList[i].fname}',\nlname:'${contactsList[i].lname}',\nmobileno:'${contactsList[i].mobileno}',\nemail:'${contactsList[i].email}',\nreason: '${contactsList[i].reason}',\n}`;
          if (i<contactsList.length-1) {
               text += ',';
          }
     }
     text+='];\n\nmodule.exports = contactsList;';
     console.log(text);
     fs.writeFileSync(dir2,`${text}`);

     fs.writeFileSync(dir,`${tabel}`);
     console.log('File has been created successfully\n');
}

module.exports = {
     getForm,
     postForm,
};
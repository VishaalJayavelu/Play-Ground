const allBlogsNames = require('../models/allBlogs.model');
const fs = require('fs');
const path = require('path');

function getDateTime() {
     let today=new Date().toLocaleString('en-us', { weekday:"short", year:"numeric", month:"short", day:"numeric", hour : "numeric" , minute : "numeric" , second : "numeric" });
     return today;
}

function getDate() {
     let today=new Date().toLocaleString('en-us', {year:"numeric", month:"short", day:"numeric"});
     return today;
}

function getTime() {
     let today=new Date().toLocaleString('en-us', { hour : "numeric" , minute : "numeric" , second : "numeric" });
     return today;
}

function content(msg){
    return msg.slice(0);
}

function getAllBinBlogs(req,res){
     console.log(`ip address: ${req.ip}`);
     console.log(`${req.method}: ${req.protocol}://${req.headers.host}${req.originalUrl} :  ${getDate()} ${getTime()} `);

     const dir3=path.join(__dirname,'../public/binBlogs.hbs');
     let tabel=`<center>\n<button type="button" onclick="window.location.href = '/AllBlogs'">All Blogs</button>\n<button type="button" onclick="window.location.href = '/NewBlog'">New Blog</button>\n<button type="button" onclick="window.location.href = '/MyBlogs/0'">My Blogs</button>\n<button type="button" onclick="window.location.href = '/MyBin'">My Bin</button>\n<form class="search" action="/Blog" method="post">\n<input type="search" name="name" id="inputSearch">\n</form>\n</center>\n<h2>{{message}}</h2>\n`;
     let tcount=0;

     for(let i=0;i<allBlogsNames.length;i++){
          if(allBlogsNames[i].delete==true){
               tcount++;
               tabel+=`<div class="warp" onclick="window.location.href ='/MyBin/${allBlogsNames[i].name}'">\n<h1>${allBlogsNames[i].title}</h1>\n<p>${allBlogsNames[i].description}</p>\n<div class="left">\n<p>${allBlogsNames[i].aurthor}</p>\n</div>\n<div class="right">\n<p>${allBlogsNames[i].date}</p>\n</div>\n</div>\n`;
          }               
     }
     fs.writeFileSync(dir3,`${tabel}`);
     if(tcount > 0){
          return res.status(200).render('binBlogs',{title : ' | Deleted Blogs'});
     }else{
          return res.status(404).render('landing',{ title : ` | Deleted Blogs`, content : `Currently there are no blogs to show` });
     }
}

function getBinBlog(req,res){
     console.log(`ip address: ${req.ip}`);
     console.log(`${req.method}: ${req.protocol}://${req.headers.host}${req.originalUrl} :  ${getDate()} ${getTime()} `);

     const name = req.params.name;
     
     for (let i=0;i<allBlogsNames.length;i++){
          if(allBlogsNames[i].name == name){
               return res.status(200).render('binblog', 
               { title : `| ${allBlogsNames[i].title}`,
               heading : `${allBlogsNames[i].title}`,
               aurthor : `${allBlogsNames[i].aurthor}`,
               date : `${allBlogsNames[i].date}`,
               deletedate : `${allBlogsNames[i].deletedate}`,
               content : `${content(allBlogsNames[i].blog)}`,
               name : `${content(allBlogsNames[i].name)}`,
               });
          }
     }
     
     return res.status(404).render('landing',{ title : `| ${name}`, content : `Cannot found page that has Blog name as : ${name}` });
}

function retiveBlog(req, res) {
     console.log(`ip address: ${req.ip}`);
     console.log(`${req.method}: ${req.protocol}://${req.headers.host}${req.originalUrl} :  ${getDate()} ${getTime()} `);

     const name = req.params.name;
     const dir=path.join(__dirname,'../public/binBlogs.hbs');
     const dir2=path.join(__dirname,'../models/allBlogs.model.js');
     let text='const allBlogsNames = [';
     let tabel=`<center>\n<button type="button" onclick="window.location.href = '/AllBlogs'">All Blogs</button>\n<button type="button" onclick="window.location.href = '/NewBlog'">New Blog</button>\n<button type="button" onclick="window.location.href = '/MyBlogs/0'">My Blogs</button>\n<button type="button" onclick="window.location.href = '/MyBin'">My Bin</button>\n<form class="search" action="/Blog" method="post">\n<input type="search" name="name" id="inputSearch">\n</form>\n</center>\n<h2>{{message}}</h2>\n`;
     let count=0;
     let tcount=0;

     for( let i=0; i<allBlogsNames.length; i++ ){

          text+=`\n{\nname:'${allBlogsNames[i].name}',\ndescription:'${allBlogsNames[i].description}',\ntitle:'${allBlogsNames[i].title}',\nblog:'${allBlogsNames[i].blog}',\naurthor: '${allBlogsNames[i].aurthor}',\ndate: '${allBlogsNames[i].date}',`;
          console.log( `${name} -- ${allBlogsNames[i].name} -- ${allBlogsNames[i].delete} -- ${count}`);
          if(allBlogsNames[i].delete === true && allBlogsNames[i].name == name && count==0){
               console.log( `-- ${allBlogsNames[i].name}`);
               text+=`\ndelete : false,\n}`;
               count++;
          }else if(allBlogsNames[i].delete === true){
               tabel+=`\n<div class="warp" onclick="window.location.href ='/MyBin/${allBlogsNames[i].name}'">\n<h1>${allBlogsNames[i].title}</h1>\n<p>${allBlogsNames[i].description}</p>\n<div class="left">\n<p>${allBlogsNames[i].aurthor}</p>\n</div>\n<div class="right">\n<p>${allBlogsNames[i].date}</p>\n</div>\n</div>\n`;
               text+=`\ndelete : true, deletedate : '${allBlogsNames[i].deletedate}',\n}`;
               tcount++;
          }else{
               text+=`\ndelete : false,\n}`;
          }

          if (i<allBlogsNames.length-1) {
               text += ',\n';
          }
     }

     text +=`\n];\n\nmodule.exports = allBlogsNames;`;
     fs.writeFileSync(dir,`${tabel}`);
     fs.writeFileSync(dir2,`${text}`);
     
     if(allBlogsNames.length>0 && allBlogsNames.length>tcount && tcount>0) {
          return res.status(200).render('binBlogs',{ title : '| retived Blog',message:`${name} blog has been retived successfully`});         
     }else{
          return res.status(404).render('landing',{ title : `| ${name}`, content : `Currently there are no blogs to show` });
     }
}



module.exports = {getAllBinBlogs,getBinBlog,retiveBlog};
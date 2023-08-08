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

function name(title){
     return title.split(" ").join("");
}

function description(content) {
     if(content.length > 150){
          let result = content.slice(0, 140);
          result+='.....';
          return result;
     }else{
          return content;
     }
}

function getAllBlogs(req,res){
     console.log(`ip address: ${req.ip}`);
     console.log(`${req.method}: ${req.protocol}://${req.headers.host}${req.originalUrl} :  ${getDate()} ${getTime()} `);     

     if(allBlogsNames.length > 0){
          const dir=path.join(__dirname,'../public/allBlogs.hbs');
          let tabel=`<center>\n<button type="button" onclick="window.location.href = '/AllBlogs'">All Blogs</button>\n<button type="button" onclick="window.location.href = '/NewBlog'">New Blog</button>\n<button type="button" onclick="window.location.href = '/MyBlogs/0'">My Blogs</button>\n<button type="button" onclick="window.location.href = '/MyBin'">My Bin</button>\n<form class="search" action="/Blog" method="post">\n<input type="search" name="name" id="inputSearch">\n</form>\n</center>\n<h2>{{message}}</h2>\n`;
          for( let i=0; i<allBlogsNames.length; i++ ){
               if(allBlogsNames[i].delete==false){
                    tabel+=`<div class="warp" onclick="window.location.href ='/AllBlogs/${allBlogsNames[i].name}'">\n<h1>${allBlogsNames[i].title}</h1>\n<p>${allBlogsNames[i].description}</p>\n<div class="left">\n<p>${allBlogsNames[i].aurthor}</p>\n</div>\n<div class="right">\n<p>${allBlogsNames[i].date}</p>\n</div>\n</div>\n`;
               }               
          }
          fs.writeFileSync(dir,`${tabel}`);
          return res.status(200).render('allBlogs', { title : '| Blogs',});
     }else{
          return res.status(404).render('landing',{title : 'no blogs to show',content : 'Currently there are no blogs to show'});
     }
}

function getBlog(req,res){
     console.log(`ip address: ${req.ip}`);
     console.log(`${req.method}: ${req.protocol}://${req.headers.host}${req.originalUrl} :  ${getDate()} ${getTime()} `);

     const name = req.params.name;
     for (let i=0;i<allBlogsNames.length;i++){
          if(allBlogsNames[i].name == name){
               return res.status(200).render('blog', 
               { title : `| ${allBlogsNames[i].title}`,
               heading : `${allBlogsNames[i].title}`,
               aurthor : `${allBlogsNames[i].aurthor}`,
               date : `${allBlogsNames[i].date}`,
               content : `${allBlogsNames[i].blog}`,
               name : `${allBlogsNames[i].name}`,
               });
          }
     }
     return res.status(404).render('landing',{ title : `| ${name}`, content : `Cannot found page that has Blog name as : ${name}` });
}

function getNewBlogs(req, res){
     console.log(`ip address: ${req.ip}`);
     console.log(`${req.method}: ${req.protocol}://${req.headers.host}${req.originalUrl} :  ${getDate()} ${getTime()} `);

     return res.status(200).render('addblog',{ title : '| New Blog'});
}

async function postBlog(req, res){
     console.log(`ip address: ${req.ip}`);
     console.log(`${req.method}: ${req.protocol}://${req.headers.host}${req.originalUrl} :  ${getDate()} ${getTime()} `);
     console.log(`${req.body.title}: ${req.body.content}${req.body.aurthor}`);
     if(req.body.title !== '' && req.body.content !== '' && req.body.aurthor !== '') {
          const dir2=path.join(__dirname,'../models/allBlogs.model.js');
          let text='const allBlogsNames = ['; 

          text+=`{\nname : '${name(req.body.title).trim()}',\ndescription : '${description(req.body.content).trim()}',\ntitle : '${req.body.title.trim()}',\nblog : '${req.body.content.trim()}',\naurthor : '${req.body.aurthor.trim()}',\ndate : '${getDateTime().trim()}',\ndelete : false}`;
          if(allBlogsNames.length > 0) { 
               text+=`,\n`;
          }
          for( let i=0; i<allBlogsNames.length; i++ ){
                    text+=`{\nname:'${allBlogsNames[i].name}',\ndescription:'${allBlogsNames[i].description}',\ntitle:'${allBlogsNames[i].title}',\nblog:'${allBlogsNames[i].blog}',\naurthor: '${allBlogsNames[i].aurthor}',\ndate: '${allBlogsNames[i].date}',\ndelete : ${allBlogsNames[i].delete}\n}`;
               if (i<allBlogsNames.length-1) {
                    text += ',\n';
               }
          }
          text+=`\n];\n\nmodule.exports = allBlogsNames;`;
          fs.writeFileSync(dir2,`${text}`);
          
          return res.status(200).render('addblog',{ title : '| New Blog',message:'new blog has been added successfully'});         
     }else if(req.body.title === '') {
          return res.status(404).render('addblog',{ title : '| New Blog',message : 'Name of the blog is need to mention', content: req.body.content, aurthor : req.body.aurthor});
     }else if(req.body.content === '') {
          return res.status(404).render('addblog',{ title : '| New Blog',message : 'Content of the blog is need to mention', name: req.body.title, aurthor : req.body.aurthor});
     }else if(req.body.aurthor === '') {
          return res.status(404).render('addblog',{ title : '| New Blog',message : 'Aurthor of the blog is need to mention', name: req.body.title, content: req.body.content});
     }

}

function searchBlog(req, res) {
     console.log(`ip address: ${req.ip}`);
     console.log(`${req.method}: ${req.protocol}://${req.headers.host}${req.originalUrl} :  ${getDate()} ${getTime()} `);

     const title = req.body.name;
     if(allBlogsNames.length > 0) {
          let count=0;
          let text=`<center>\n<button type="button" onclick="window.location.href = '/AllBlogs'">All Blogs</button>\n<button type="button" onclick="window.location.href = '/NewBlog'">New Blog</button>\n<button type="button" onclick="window.location.href = '/MyBlogs/0'">My Blogs</button>\n<button type="button" onclick="window.location.href = '/MyBin'">My Bin</button>\n<form class="search" action="/Blog" method="post">\n<input type="search" name="name" id="inputSearch">\n</form>\n</center>\n<h2>{{message}}</h2>\n`;
          const dir=path.join(__dirname,'../public/allSearchBlogs.hbs');
          for(let i=0; i<allBlogsNames.length; i++){
               if(allBlogsNames[i].aurthor == title || allBlogsNames[i].name == title || allBlogsNames[i].title == title){
                   count++;
                    text += `<div class="warp" onclick="window.location.href ='/AllBlogs/${allBlogsNames[i].name}'">\n<h1>${allBlogsNames[i].title}</h1>\n<p>${allBlogsNames[i].description}</p>\n<div class="left">\n<p>${allBlogsNames[i].aurthor}</p>\n</div>\n<div class="right">\n<p>${allBlogsNames[i].date}</p>\n</div>\n</div>\n`;
               }     
          }
          fs.writeFileSync(dir,`${text}`);
          if(count>0){
               if(count>1){
                    return res.status(200).render('allSearchBlogs', {
                         title: `Searching results ${title}`,
                         message : `There are ${count} blog that sre macthcing the search, they are as follows: `
                    });
               }
               return res.status(200).render('allSearchBlogs', {
                    title: `Searching results ${title}`,
                    message : `There is 1 blog that is macthcing the search, they are as follows: `
               });
          }

     }

     return res.status(404).render('landing',{ title : `| ${title}`, content : `Cannot found page that has Blog name as : ${title}` });
}

function deleteBlog(req, res) {
     console.log(`ip address: ${req.ip}`);
     console.log(`${req.method}: ${req.protocol}://${req.headers.host}${req.originalUrl} :  ${getDate()} ${getTime()} `);

     const name = req.params.name;
     const dir=path.join(__dirname,'../public/allBlogs.hbs');
     const dir2=path.join(__dirname,'../models/allBlogs.model.js');
     let text='const allBlogsNames = [';
     let tabel=`<center>\n<button type="button" onclick="window.location.href = '/AllBlogs'">All Blogs</button>\n<button type="button" onclick="window.location.href = '/NewBlog'">New Blog</button>\n<button type="button" onclick="window.location.href = '/MyBlogs/0'">My Blogs</button>\n<button type="button" onclick="window.location.href = '/MyBin'">My Bin</button>\n<form class="search" action="/Blog" method="post">\n<input type="search" name="name" id="inputSearch">\n</form>\n</center>\n<h2>{{message}}</h2>\n`;
     let count=0;
     let fcount=0;
     let title='';

     for( let i=0; i<allBlogsNames.length; i++ ){

          text+=`\n{\nname:'${allBlogsNames[i].name}',\ndescription:'${allBlogsNames[i].description}',\ntitle:'${allBlogsNames[i].title}',\nblog:'${allBlogsNames[i].blog}',\naurthor: '${allBlogsNames[i].aurthor}',\ndate: '${allBlogsNames[i].date}',`;
          if(allBlogsNames[i].delete === false && allBlogsNames[i].name == name && count==0){
               title = `${allBlogsNames[i].title}`;
               text+=`\ndelete : true,\ndeletedate : '${getDateTime()}',\n}`;
               count++;
               fcount++;
          }else if(allBlogsNames[i].delete === false){
               tabel+=`\n<div class="warp" onclick="window.location.href ='/AllBlogs/${allBlogsNames[i].name}'">\n<h1>${allBlogsNames[i].title}</h1>\n<p>${allBlogsNames[i].description}</p>\n<div class="left">\n<p>${allBlogsNames[i].aurthor}</p>\n</div>\n<div class="right">\n<p>${allBlogsNames[i].date}</p>\n</div>\n</div>\n`;
               text+=`\ndelete : false,\n}`;
          }else{
               text+=`\ndelete : true,\ndeletedate : '${allBlogsNames[i].deletedate}',\n}`;
               fcount++;
          }

          if (i<allBlogsNames.length-1) {
               text += ',\n';
          }
     }

     text +=`\n];\n\nmodule.exports = allBlogsNames;`;
     fs.writeFileSync(dir,`${tabel}`);
     fs.writeFileSync(dir2,`${text}`);
     
     if(allBlogsNames.length>0 && allBlogsNames.length>fcount) {
          return res.status(202).render('allBlogs',{ title : '| All Blog',message:`${title} blog has been deleted successfully`},);         
     }else{
          return res.status(404).render('landing',{ title : `| No blogs to shoe`, content : `Currently there are no blogs to show` });
     }
}

function editBlog(req,res){
     const name = req.params.name;
     for (let i = 0; i < allBlogsNames.length; i++) {
          if(name == allBlogsNames[i].name){
               return res.render('editblog',{
                    title: `Editing ${allBlogsNames[i].title} blog`,
                    name: allBlogsNames[i].title,
                    content: allBlogsNames[i].blog,
                    aurthor: allBlogsNames[i].aurthor,
               });
          }
     }
}

function addeditBlog(req,res){
     const id = req.params.name;

     console.log(`ip address: ${req.ip}`);
     console.log(`${req.method}: ${req.protocol}://${req.headers.host}${req.originalUrl} :  ${getDate()} ${getTime()} `);
     console.log(`${req.body.title}: ${req.body.content} ${req.body.aurthor}`);
     
     const newname = name(req.body.title);
     const newdescription = description(req.body.content);

     if(req.body.title !== '' && req.body.content !== '' && req.body.aurthor !== '') {
          const dir2=path.join(__dirname,'../models/allBlogs.model.js');
          let text='const allBlogsNames = ['; 
               
          text+=`{\nname:'${newname}',\ndescription:'${newdescription}',\ntitle:'${req.body.title}',\nblog:'${req.body.content}',\naurthor: '${req.body.aurthor}',\ndate: '${getDateTime()}',\ndelete : false\n}`;               
          for( let i=0; i<allBlogsNames.length; i++ ){
               const name = allBlogsNames[i].name;
               if(name !=id){
                    text+=`{\nname:'${allBlogsNames[i].name}',\ndescription:'${allBlogsNames[i].description}',\ntitle:'${allBlogsNames[i].title}',\nblog:'${allBlogsNames[i].blog}',\naurthor: '${allBlogsNames[i].aurthor}',\ndate: '${allBlogsNames[i].date}',\ndelete : ${allBlogsNames[i].delete}\n}`;
               }
               if (i<allBlogsNames.length-1 && allBlogsNames[i] != id) {
                    text += ',\n';
               }
          }
          text+=`\n];\n\nmodule.exports = allBlogsNames;`;
          fs.writeFileSync(dir2,`${text}`);
          for(let i=0; i<allBlogsNames.length; i++){
               if(allBlogsNames[i].name === newname){
                    return res.status(200).render('blog',{ 
                         title : `| ${allBlogsNames[i].title} Blog`,
                         heading : `${allBlogsNames[i].title}`,
                         aurthor :`${allBlogsNames[i].aurthor}`,
                         date : `${allBlogsNames[i].date}`,
                         content : `${allBlogsNames[i].blog}`,
                         name : `${allBlogsNames[i].name}`,
                    });
               }         
          }

     }else if(req.body.title === '') {
          return res.status(404).render('addblog',{ title : '| New Blog',message : 'Name of the blog is need to mention', content: req.body.content, aurthor : req.body.aurthor});
     }else if(req.body.content === '') {
          return res.status(404).render('addblog',{ title : '| New Blog',message : 'Content of the blog is need to mention', name: req.body.title, aurthor : req.body.aurthor});
     }else if(req.body.aurthor === '') {
          return res.status(404).render('addblog',{ title : '| New Blog',message : 'Aurthor of the blog is need to mention', name: req.body.title, content: req.body.content});
     }
}

module.exports = {getAllBlogs,getBlog,getNewBlogs,postBlog,searchBlog,deleteBlog,editBlog,addeditBlog};
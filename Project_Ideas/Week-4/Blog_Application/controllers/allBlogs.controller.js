const allBlogs = require('../models/allBlogs.model')
const path=require('path');
const fs = require('fs');

function GetAllBlogs(req,res){
     const dir=path.join(__dirname,'..','public','landing.hbs');
     let text=`<center>\n<button onclick="window.location.href='/'">Home</button>\n<button onclick="window.location.href='/SignIn'">Sign In</button>\n<button onclick="window.location.href='/SignUp'">Sign Up</button>\n</center>\n<center>\n<h2 class="error">{{messages}}</h2>\n</center>\n`;
     
     for(let i=allBlogs.length-1;i>=0;i--){
          text += `<div class="warp" onclick="window.location.href='/blog/${allBlogs[i].name}'">\n<h4>${allBlogs[i].title}</h4>\n<p>${allBlogs[i].description}</p>\n</div>\n`;
     }
     
     fs.writeFileSync(dir,text);
     return res.status(200).render('landing',{
          messages:'Select a Blog  from the list to view the blog detail or Log In/Sign Up to create new blog',
     });
}

function GetBlog(req,res){
     const name = req.params.name;
     console.log(name);
     const dir=path.join(__dirname,'..','public','landing.hbs');
     let text=`<center>\n<button onclick="window.location.href='/'">Home</button>\n<button onclick="window.location.href='/SignIn'">Sign In</button>\n<button onclick="window.location.href='/SignUp'">Sign Up</button>\n</center>\n<center>\n<h2 class="error">{{messages}}</h2>\n</center>\n`;
     
     for(let i=0;i<allBlogs.length;i++){
          console.log(`${allBlogs[i].name} -- ${name}`);
          if(name==allBlogs[i].name){
               console.log(`${allBlogs[i].name} -- ${name}`);
               text += `<div class="blog"><h1>${allBlogs[i].title}</h1>\n<h3 class="left">${allBlogs[i].aurthor}</h3>\n<h3 class="right">${allBlogs[i].date}</h3>\n<hr>\n<p>${allBlogs[i].blog}</p>\n</div>\n`;               
               fs.writeFileSync(dir,`${text}`);
               return res.status(200).render('landing',{});
          }
     }
     fs.writeFileSync(dir,`${text}`);   
     return res.status(404).render('landing',{messages:'Not Found'});
     
}

module.exports = {
     GetAllBlogs,
     GetBlog,
};
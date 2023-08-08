const users = require('../models/user.model');
const allBlogsNames = require('../models/allBlogs.model');
const fs = require('fs');
const path = require('path');

function getMyBlogs(req,res){

     const id = req.params.name;

     if(users.length>=id){
          const dir = path.join(__dirname, '..' , 'public','MyBlogs.hbs');
          let text = `<center>\n<button type="button" onclick="window.location.href = '/AllBlogs'">All Blogs</button>\n<button type="button" onclick="window.location.href = '/NewBlog'">New Blog</button>\n<button type="button" onclick="window.location.href = '/MyBlogs/0'">My Blogs</button>\n<button type="button" onclick="window.location.href = '/MyBin'">My Bin</button>\n<form class="search" action="/Blog" method="post">\n<input type="search" name="name" id="inputSearch">\n</form>\n</center>\n<h2>{{messages}}</h2>\n`;  
          let count = 0;
          let dcount = 0;
          let scount=0;

          for(let i=0; i<allBlogsNames.length; i++){
               if(allBlogsNames[i].aurthor==users[id].username ){
                    count++;
                    if(allBlogsNames[i].delete == false){
                         scount++;
                         text+=`\n<div class="warp" onclick="window.location.href ='/AllBlogs/${allBlogsNames[i].name}'">\n<h1>${allBlogsNames[i].title}</h1>\n<p>${allBlogsNames[i].description}</p>\n<div class="left">\n<p>${allBlogsNames[i].aurthor}</p>\n</div>\n<div class="right">\n<p>${allBlogsNames[i].date}</p>\n</div>\n</div>\n`;
                    }else{
                         dcount++;
                    }
               }
          }
          fs.writeFileSync(dir,`${text}`);
          if(scount>0){
               if(dcount==0){
                    return res.render('MyBlogs', {
                         title: 'My Blogs',
                         messages : `There are ${count} blog posts you have created`,
                    });
               }
               return res.render('MyBlogs', {
                    title: 'My Blogs',
                    messages : `There are ${count} blog posts you have created in which you have deleted ${dcount} blog`,
               });
          }
          return res.render('MyBlogs', {
               title: 'My Blogs',
               messages : `There are no blog to show that you have created`,
          });
     }
}

module.exports ={getMyBlogs};

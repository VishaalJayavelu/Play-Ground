//importing modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

//importing Routes
const allBlogsRouter = require('./routes/allBlogs.route');
const newBlogRouter = require('./routes/newBlog.route');
const blogsRouter = require('./routes/blogs.route');
const binRouter = require('./routes/bin.route');
const landingRouter = require('./routes/landing.route');
const myblogsRouter = require('./routes/myblogs.route');
//configuring Port & express
const app = express();

app.use('/',(req,res,next)=>{
     const start = Date.now();
     next();
     const difftime = Date.now() - start;
     console.log(`${req.method} ${req.url} ${difftime}ms`);
});
// configuration of view engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'public'));

//Parsing application/json & application/xwxx
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Configuring express to use json and static files from public
app.use(express.json());
// Configuring Route paths
app.use('/AllBlogs', allBlogsRouter);
app.use('/AllBlogs/delete', allBlogsRouter);
app.use('/AllBlogs/edit', allBlogsRouter);
app.use('/NewBlog', newBlogRouter);
app.use('/NewBlog/edit', newBlogRouter);
app.use('/Blog', blogsRouter);
app.use('/MYBlogs', myblogsRouter);
app.use('/MYBlogs/delete', myblogsRouter);
app.use('/MYBlogs/edit', myblogsRouter);
app.use('/MyBin', binRouter);
app.use('/', landingRouter);

//seting express to listen in configuerd port
module.exports = app;
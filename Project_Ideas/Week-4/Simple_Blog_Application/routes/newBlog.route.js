const express = require('express');
const path = require('path');

const {getNewBlogs,postBlog,addeditBlog} = require('../controllers/blogs.controller');

const newBlogRouter = express.Router();

newBlogRouter.use('/',express.static(path.join(__dirname,'..', 'public')));

newBlogRouter.get('/',getNewBlogs);
newBlogRouter.post('/',postBlog);
newBlogRouter.post('/edit/:name',addeditBlog);

module.exports = newBlogRouter;
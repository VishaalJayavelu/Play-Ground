const express = require('express');
const path = require('path');

const {getAllBlogs,getBlog,deleteBlog,editBlog} = require('../controllers/blogs.controller');

const allBlogsRouter = express.Router();

allBlogsRouter.get('/',getAllBlogs);
allBlogsRouter.get('/:name',getBlog);
allBlogsRouter.post('/delete/:name',deleteBlog);
allBlogsRouter.post('/edit/:name',editBlog);

allBlogsRouter.use(express.static(path.join(__dirname,'..', 'public')));

module.exports = allBlogsRouter;

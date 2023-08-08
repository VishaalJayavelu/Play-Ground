const express = require('express');
const path = require('path');

const {searchBlog} = require('../controllers/blogs.controller');

const blogsRouter = express.Router();

blogsRouter.post('/',searchBlog);

blogsRouter.use('/',express.static(path.join(__dirname,'..', 'public')));

module.exports = blogsRouter;

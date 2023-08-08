const express = require('express');
const path = require('path');

const {GetBlog} = require('../controllers/allBlogs.controller');

const BlogRouter = express.Router();

BlogRouter.use('/',express.static(path.join(__dirname,'..', 'public','css')));

BlogRouter.get('/:name',GetBlog);

module.exports = BlogRouter;
const express = require('express');
const path = require('path');

const {getAllBinBlogs,getBinBlog,retiveBlog}= require('../controllers/bin.controller');

const binRouter = express.Router();

binRouter.use('/',express.static(path.join(__dirname,'..', 'public')));

binRouter.get('/',getAllBinBlogs);
binRouter.get('/:name',getBinBlog);
binRouter.post('/:name',retiveBlog);

module.exports = binRouter;
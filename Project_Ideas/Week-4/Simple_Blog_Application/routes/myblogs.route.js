const express = require('express');
const path = require('path');

const {getMyBlogs}= require('../controllers/user.controller');

const myblogsRouter = express.Router();

myblogsRouter.use('/',express.static(path.join(__dirname,'..', 'public')));

myblogsRouter.get('/:name',getMyBlogs);
myblogsRouter.post('/delete/:name',getMyBlogs);
myblogsRouter.post('/edit/:name',getMyBlogs);

module.exports = myblogsRouter;
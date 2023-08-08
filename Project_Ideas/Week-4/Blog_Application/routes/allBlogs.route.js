const express = require('express');
const path = require('path');

const {GetAllBlogs} = require('../controllers/allBlogs.controller');

const landingRouter = express.Router();

landingRouter.get('/',GetAllBlogs);

landingRouter.use('/',express.static(path.join(__dirname,'..', 'public','css')));

module.exports = landingRouter;
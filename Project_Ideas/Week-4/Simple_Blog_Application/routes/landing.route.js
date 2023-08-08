const express = require('express');
const path = require('path');

const landingRouter = express.Router();

landingRouter.get('/',(req,res)=>{
     res.render('landing',{content:'Select a option above'});
});

landingRouter.use('/',express.static(path.join(__dirname,'..', 'public')));

module.exports = landingRouter;
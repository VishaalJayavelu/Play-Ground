const express = require('express');
const formContoller = require('../controllers/form.controller')

const formRouter = express.Router();

formRouter.use((req,res,next) => {
     console.log('IP Address: '+req.ip);
     next();
});
formRouter.get('/',formContoller.getForm);
formRouter.post('/',formContoller.postForm);

module.exports = formRouter;
const express = require('express');

const formsController = require('../controllers/forms.controller');

const formsRouter = express.Router();

formsRouter.use((req, res, next)=> {
     console.log('ip address: ', req.ip);
     next();
});

formsRouter.get('/',formsController.getForm);
formsRouter.get('/:id',formsController.getFormId);

module.exports = formsRouter;
const express = require('express');
const path = require('path');

const {signInForm,signIn} = require('../controllers/form.controller');

const sigInRouter = express.Router();

sigInRouter.get('/',signInForm);
sigInRouter.post('/',signIn);

sigInRouter.use('/',express.static(path.join(__dirname,'..', 'public','css')));

module.exports = sigInRouter;
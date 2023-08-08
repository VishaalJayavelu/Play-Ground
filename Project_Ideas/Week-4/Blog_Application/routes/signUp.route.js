const express = require('express');
const path = require('path');

const {signUpForm,signUp} = require('../controllers/form.controller');

const sigInRouter = express.Router();

sigInRouter.get('/',signUpForm);
sigInRouter.post('/',signUp);

sigInRouter.use('/',express.static(path.join(__dirname,'..', 'public','css')));

module.exports = sigInRouter;
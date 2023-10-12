const express = require('express')
const controller = require('../controller/controller')

const route = express.Router()


route.get('/',controller.getForm);
route.post('/post',controller.postForm);

module.exports = route;
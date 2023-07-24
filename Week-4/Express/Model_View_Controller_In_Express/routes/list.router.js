const express = require('express');

const listController = require('../controllers/list.controller');

const listRouter = express.Router();

listRouter.use((req, res, next)=> {
     console.log('ip address: ', req.ip);
     next();
});

listRouter.post('/', listController.postList);
listRouter.get('/',listController.getList);
listRouter.get('/:id',listController.getListId);

module.exports = listRouter;
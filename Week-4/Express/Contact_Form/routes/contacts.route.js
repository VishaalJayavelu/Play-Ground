const express = require('express');

const contactsController = require('../controllers/contacts.controller');

const contactsRouter = express.Router();

contactsRouter.get('/',contactsController.getcontacts);
contactsRouter.post('/',contactsController.postcontacts);

module.exports = contactsRouter;


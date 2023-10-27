import express from 'express';
import {
     findAllLead,
     postLead,
     editLead,
     deleteLead,
     deleteAllLead
} from './lead.controller.js'

const leadRoute = express.Router();

leadRoute.get('/', findAllLead)
leadRoute.post('/', postLead)
leadRoute.put('/:id', editLead)
leadRoute.delete('/:id', deleteLead)

export default leadRoute
const express=require('express');

const {httpGetAllLaunches,httpGetNewLaunch,httpAbortLaunch} = require('./launches.controller');

const launchesRouter = express.Router();

launchesRouter.get('/',httpGetAllLaunches);
launchesRouter.post('/',httpGetNewLaunch);
launchesRouter.delete('/:id',httpAbortLaunch);

module.exports = launchesRouter;
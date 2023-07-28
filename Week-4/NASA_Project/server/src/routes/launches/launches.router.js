const express=require('express');

const {httpGetAllLaunches,httpGetNewLaunch} = require('./launches.controller');

const launchesRouter = express.Router();

launchesRouter.get('/',httpGetAllLaunches);
launchesRouter.post('/',httpGetNewLaunch);

module.exports = launchesRouter;
const { 
     getAllLaunches,
     addNewLaunch,
     existsLaunchID,
     abortLaunchID
} = require('../../models/launches.model');

function httpGetAllLaunches(req,res){
     return res.status(200).json(getAllLaunches());
}
function httpGetNewLaunch(req,res){
     const launch = req.body;
     if(!launch.mission||!launch.rocket||!launch.launchDate||!launch.target){
          return res.status(400).json({
               error :"Missing Values",
          });
     }

     launch.launchDate =new Date(launch.launchDate);
     if(isNaN(launch.launchDate)){
          return res.status(400).json({
               error :"Invalid Date",
          });
     }
     addNewLaunch(launch);
     return res.status(201).json(launch); 
}

function httpAbortLaunch(req, res){
     const launchId = Number(req.params.id);
     if(!existsLaunchID(launchId)){
          return res.status(404).json({
               error :"Invalid Launch Id",
          });
     }else{
          const aborted = abortLaunchID(launchId);
          return res.status(200).json(aborted);
     }
}

module.exports = {
     httpGetAllLaunches,
     httpGetNewLaunch,
     httpAbortLaunch,
};
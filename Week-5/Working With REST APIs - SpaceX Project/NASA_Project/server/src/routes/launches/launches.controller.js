const { 
     getAllLaunches,
     scheduleNewLaunch,
     existsLaunchID,
     abortLaunchID
} = require('../../models/launches.model');

const {
     getPagination
} = require('../../services/query');

async function httpGetAllLaunches(req,res){
     const {skip,limit} = getPagination(req.query)
     const launches = await getAllLaunches(skip,limit)
     return res.status(200).json(launches);
}

async function httpGetNewLaunch(req,res){
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
     
     const ans = await scheduleNewLaunch(launch);
     console.log(ans);
     if(ans)return res.status(201).json(launch);
     else return res.status(400).json({
          error :"No matching planet found",
     }); 
}

async function httpAbortLaunch(req, res){
     const launchId = Number(req.params.id);

     const existsLaunch = await existsLaunchID(launchId)

     if(!existsLaunch){
          return res.status(404).json({
               error :"Invalid Launch Id",
          });
     }else{
          const aborted = await abortLaunchID(launchId);
          if(!aborted){
               return res.status(404).json({
                    error :"Launch does not aborted",
               });
          }
          return res.status(200).json({
               ok : true,
          });
     }
}

module.exports = {
     httpGetAllLaunches,
     httpGetNewLaunch,
     httpAbortLaunch,
};
const launchesData = require ('./lanuches.mongo')
const planets = require ('./planets.mongo')

const DefaultFlightNumber = 100;

async function existsLaunchID(LaunchID){
     return await launchesData.find({'flightNumber':LaunchID});
}

async function getLatestFlightNumber(){
     const lastlaunch = await launchesData.findOne({}).sort('-flightNumber')
     if (!lastlaunch){
          return DefaultFlightNumber
     }
     return lastlaunch.flightNumber
}

async function getAllLaunches() {  
     return await launchesData.find({},{'_id':0,'__v':0});
}

async function saveLaunch(launch){

     const planet = await planets.findOne({
          keplerName: launch.target,
     });
          
     if(!planet){
          return false
     }else{
          const save = await launchesData.findOneAndUpdate({
               flightNumber : launch.flightNumber,
          },launch,{
               upsert: true,
          })
          return true
     }
}

async function scheduleNewLaunch(launch){
     let lastFlightNumber = await getLatestFlightNumber()+1;
     const newLaunch = Object.assign(launch,{
          upcoming: true,
          success: true,
          customers: ['zero','NASA'],
          flightNumber: lastFlightNumber,
     })
     
     return await saveLaunch(newLaunch)
}

async function abortLaunchID(launchId){
     const aborted = await launchesData.updateOne({
          flightNumber : launchId,
     },{
          upcoming : false,
          success : false,
     })
     
     return aborted.matchedCount ==1 && aborted.modifiedCount == 1;
}

module.exports = {
     existsLaunchID,
     getAllLaunches,
     abortLaunchID,
     scheduleNewLaunch,
} 
const axios = require('axios')

const launchesData = require ('./lanuches.mongo')
const planets = require ('./planets.mongo')

const DefaultFlightNumber = 100;

const SPACE_API_URL = 'https://api.spacexdata.com/v5/launches/query'

async function populateLaunches(){
     console.log('Downloading spaceX launch data....');
     const respose = await axios.post(SPACE_API_URL,{
          "query": {},
          "options": {
               "pagination":false,
               "populate": [
                    {
                         "path":"rocket",
                         "select": {
                              "name":1
                         }
                    },{
                         "path":"payloads",
                         "select": {
                              "customers":1
                         }
                    }
               ]
          }
     })
     if(respose.status !== 200){
          console.log('Problem downloading spaceX launch data');
          return false
     }
     const spaceXDatas = respose.data.docs;
     for( const spaceXData of spaceXDatas){
          
          const payload = spaceXData.payloads
          const customers = payload.flatMap((payload)=>{
               return payload.customers
          })
          
          const launch ={
               flightNumber:spaceXData.flight_number,
               mission:spaceXData.name,
               rocket : spaceXData.rocket.name,
               launchDate : spaceXData.date_local,
               upcoming:spaceXData.upcoming,
               success:spaceXData.success,
               customers
          }
          console.log(`${launch.flightNumber} ${launch.mission}`)
          await saveLaunch(launch)
     }
     return true
}

async function loadLaunchData(){
     const firstLaunch = await findLaunch({
          flightNumber:1,
          rocket: 'Falcon 1',
          mission: 'FalconSat'
     })
     
     if(firstLaunch){
          console.log('Launch Data already Loaded')
          return ;
     }
     populateLaunches()
     
}

async function findLaunch(filter){
     return await launchesData.findOne(filter);
}


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

async function getAllLaunches(skip,limit) {  
     return await launchesData.find({},{'_id':0,'__v':0}).sort({flightNumber:1}).skip(skip).limit(limit);
}

async function saveLaunch(launch){

     const save = await launchesData.findOneAndUpdate({
          flightNumber : launch.flightNumber,
     },launch,{
          upsert: true,
     })
     return true
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
     const planet = await planets.findOne({
          keplerName: launch.target,
     });
          
     if(!planet){
          return false
     }

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
     loadLaunchData,
} 
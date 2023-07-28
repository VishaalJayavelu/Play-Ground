const launches =new Map();
let lastFlightNumber = 100;

const launch={
     flightNumber: 100,
     mission: 'keepler',
     rocket:'Exploer IS1',
     launchDate: new Date('December 27,2030'),
     target: 'Keepler-442 b',
     customers: ['ZTM','NASA'],
     upcoming: true,
     success: true,
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {  
     return Array.from(launches.values());
}

function addNewLaunch(launch) {
     lastFlightNumber++;
     launches.set(
          lastFlightNumber, 
          Object.assign(launch,{
               flightNumber: lastFlightNumber,
               customers: ['zero','NASA'],
               upcoming: true,
               success: true,
          })
     );
}

module.exports = {
     getAllLaunches,
     addNewLaunch,
}
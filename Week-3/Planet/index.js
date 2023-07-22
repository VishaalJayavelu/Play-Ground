const { parse } = require('csv-parse');
const fs  = require('fs');

const result=[];

function isHabitable(planet){
     return planet['koi_disposition']==='CONFIRMED'
     && planet['koi_insol']<1.11 && planet['koi_insol']>0.36
     && planet['koi_prad']<1.6;
}

fs.createReadStream('kepler_data.csv')
.pipe(parse({
     comment:'#',
     columns: true,
}))
.on('data', (data)=>{
     if(isHabitable(data)){
          result.push(data);
     }
})
.on('error',(err)=>{
     console.error(err);
})
.on('end', ()=>{
     console.log(result.map((planet)=>{
          return planet['kepler_name']
     }));
     console.log(`${result.length}`);
     console.log('done');
});


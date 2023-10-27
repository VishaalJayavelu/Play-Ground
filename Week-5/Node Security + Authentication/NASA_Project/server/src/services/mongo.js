const mongoose = require('mongoose');

const MONGO_URL = process.env.MONGO_URL
mongoose.connection.once('open',()=>{
     console.log('MongoDB connection Ready')
})

mongoose.connection.on('error',(error)=>{
     console.error(error)
})

async function mongoConnect(){
     await mongoose.connect(MONGO_URL,{
          useNewUrlParser:true,
          useUnifiedtopology:true,
     })
}

async function mongoDisconnect(){
     await mongoose.disconnect();
}

module.exports = {mongoConnect,mongoDisconnect}
import mongoose from "mongoose"

const leadSchema = new mongoose.Schema({
     Id:{
          type:Number,
          unique:true,
          required:true
     },
     name:{
          type:String,
          required:true
     },
     lead_created:{
          type:Date,
          required:true,
          default:Date.now
     }
},{timestamps:true,versionKey:false})

const Lead = new mongoose.model('lead',leadSchema)

export default Lead
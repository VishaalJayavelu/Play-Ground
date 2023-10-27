import mongoose from "mongoose"

const connectDb=async()=>{
     try{
          const db= await mongoose.connect('mongodb://127.0.0.1/MyDatabase');
          console.log('db connected Succcesfully');
     }
     catch(err){
          console.log(err);
     }
}
 
export default connectDb;
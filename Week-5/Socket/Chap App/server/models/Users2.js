const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({
     fullName:{
          type: String,
          require: true,
     },
     email:{
          type: String,
          require: true,
          unique: true,
     },
     password:{
          type: String,
          require: true,
     },
     token:{
          type: String,
     },
},{timestamps:true,versionKey:false})

const ChatApp2 = mongoose.connection.useDb('ChatApp2');

const Users = ChatApp2.model('Users', UsersSchema);

module.exports = Users;
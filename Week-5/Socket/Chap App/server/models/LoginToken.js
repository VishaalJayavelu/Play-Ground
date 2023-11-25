const mongoose = require('mongoose');

const LoginTokenSchema = mongoose.Schema({
     token:{
          type: String,
     },
     createdAt:{
          type: Date,
          default: Date.now(),
          expires: 3600
     }
},{timestamps:true,versionKey:false})

const ChatApp = mongoose.connection.useDb('ChatApp');

const LoginToken = ChatApp.model('LoginToken', LoginTokenSchema);

module.exports = LoginToken;
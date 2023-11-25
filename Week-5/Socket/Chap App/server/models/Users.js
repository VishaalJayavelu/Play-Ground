const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    token: {
        type: String
    }
});

const ChatApp = mongoose.connection.useDb('ChatApp');

const Users = ChatApp.model('User', userSchema);

module.exports = Users;
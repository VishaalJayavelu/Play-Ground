const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    conversationId: {
        type: String,
    },
    senderId: {
        type: String
    },
    message: {
        type: String
    }
});

const ChatApp = mongoose.connection.useDb('ChatApp');

const Messages = ChatApp.model('Message', messageSchema);

module.exports = Messages;
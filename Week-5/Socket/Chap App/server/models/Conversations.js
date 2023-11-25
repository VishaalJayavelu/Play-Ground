const mongoose = require('mongoose');

const conversationSchema = mongoose.Schema({
    members: {
        type: Array,
        required: true,
    }
});

const ChatApp = mongoose.connection.useDb('ChatApp');

const Conversation = ChatApp.model('Conversation', conversationSchema);

module.exports = Conversation;
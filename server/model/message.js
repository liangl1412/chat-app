import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    messageId: mongoose.Types.ObjectId,
    messageAuthor: String,
    timeCreated: Number,
    text: String,
    conversationId: String 
})
//this is change from test branch
const Message = mongoose.model('message', messageSchema);

module.exports = Message;
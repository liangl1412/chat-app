import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    messageId: mongoose.Types.ObjectId,
    messageAuthor: String,
    timeCreated: Number,
    text: String,
    conversationId: String 
})
<<<<<<< HEAD
//this is second test
=======
//this is test

>>>>>>> f14d4f860348d29cb2b637161b91edafae34789e
const Message = mongoose.model('message', messageSchema);

module.exports = Message;

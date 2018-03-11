import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const conversationSchema = new Schema({
  conversationId: mongoose.Types.ObjectId,
  members: Array,
  messages: Array  
})

const Conversation = mongoose.model('conversation', conversationSchema);

module.exports = Conversation;

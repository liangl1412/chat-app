import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const conversationSchema = new Schema({
  conversationId: mongoose.Types.ObjectId,
  conversationName: String,
  conversatioOwner: Array,
  type: String,
  members: Array,
  messages: Array  
})

const Conversation = mongoose.model('conversation', conversationSchema);

module.exports = Conversation;

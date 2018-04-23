import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const conversationSchema = new Schema({
  conversationName: String,
  conversatioOwner: Array,
  type: String,
  members: Array
})

const Conversation = mongoose.model('conversation', conversationSchema);

module.exports = Conversation;

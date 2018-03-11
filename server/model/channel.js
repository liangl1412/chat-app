import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const channelSchema = new Schema({
  channelId: String,
  channelName: String,
  members: Array,
  messages: Array  
})

const Channel = mongoose.model('channel', channelSchema);

module.exports = Channel;

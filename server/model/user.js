import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  googleid: String,
  avatar: String,
  friendLists: Array,
  channelLists: Array
})

const User = mongoose.model('user', userSchema);

module.exports = User;

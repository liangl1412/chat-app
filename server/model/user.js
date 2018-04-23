import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  googleid: String,
  email: String,
  avatar: String,
  recentConversation: Array
})

const User = mongoose.model('user', userSchema);

module.exports = User;

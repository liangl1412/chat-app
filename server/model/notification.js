import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
  sender: String,
  sendTo: String, 
  type: String
})

const Notification = mongoose.model('notification', notificationSchema);

module.exports = Notification;

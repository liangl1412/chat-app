import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const directMessageSchema = new Schema({
    from: mongoose.Types.ObjectId,
    to: mongoose.Types.ObjectId,
    timeCreated: Number,
    text: String 
})

const DirectMessage = mongoose.model('directMessage', directMessageSchema);
module.exports = DirectMessage;

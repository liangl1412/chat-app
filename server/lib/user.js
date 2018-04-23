import User from '../model/user';
import mongoose from 'mongoose';

export function findById(userid) {
   
}

export function findByEmail(email) {
    return new Promise((resolve, reject) => {
        User.findOne({email: email}, (err, user) => {
            if(user) {
                return resolve(user);
            }
            return reject('can not find record with email: '+ email);
        })
    })
}

export function createUser(email, profile) {
    return new Promise((resolve, reject) => {
        new User({
            username: profile.displayName,
            googleid: profile.id,
            email: email
        })
        .save((err, newUser) => {
            if(newUser) {
                return resolve(newUser)
            }
            return reject('unable to create new user');
        })
    });
}

export function findAllUsers() {
    return User.find({},'username email').exec();
}

export function addRecentConversation(userId, conversation) {
    return User.findByIdAndUpdate(
        mongoose.Types.ObjectId(userId), 
        {$addToSet: { recentConversation: conversation }},
        {new: true}
    ).exec();
}
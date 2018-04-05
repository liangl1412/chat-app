import Message from '../model/message';

export function fetchMsgs(conversationId) {
    return new Promise((resolve, reject) => {
        Message.find({conversationId: conversationId}, (err, msgs) => {
            if(msgs) {
                return resolve(msgs);
            }
            return reject('can not find record with email: '+ email);
        })
    })
}

export function createMsg(conversationId, msg) {
    return new Promise((resolve, reject) => {
        new Message({
            conversationId: conversationId,
            messageAuthor: msg.author,
            text: msg.text,
            timeCreated: msg.timeCreated
        })
        .save((err, result) => {
            if (result) {
                return resolve(result)
            }
            return reject('unable to create new conversation');
        })
    });
}
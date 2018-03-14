import Conversation from '../model/conversation';

export function fetchMsgs(id, type) {
    if(type == 'conversation') {
        return new Promise((resolve, reject) => {
            Conversation.findById(
                id,
                'messages',
                (err, messages) => {
                    if (messages) {
                        return resolve(user);
                    }
                    return reject('can not find record with conversationid: ' + id);
                }
            )
        })
    } else if (type == 'channel') {
        return new Promise((resolve, reject) => {
            Channel.findById(
                id,
                'messages',
                (err, messages) => {
                    if (messages) {
                        return resolve(user);
                    }
                    return reject('can not find record with channelid: ' + id);
                }
            )
        })
    }
    
}
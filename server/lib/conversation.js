import Conversation from '../model/conversation';


export function createConversation(name, members, type) {
    return new Promise((resolve, reject) => {
        new Conversation({
            conversationName: name,
            members: members
        })
        .save((err, result) => {
            if (result) {
                return resolve(result)
            }
            return reject('unable to create new conversation');
        })
    });
}
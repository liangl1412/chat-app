import Conversation from '../model/conversation';


export function createConversation(name, members, owner, type) {
    return new Promise((resolve, reject) => {
        new Conversation({
            conversationName: name,
            conversatioOwner: onwer,
            members: members,
            type: type
        })
        .save((err, result) => {
            if (result) {
                return resolve(result)
            }
            return reject('unable to create new conversation');
        })
    });
}
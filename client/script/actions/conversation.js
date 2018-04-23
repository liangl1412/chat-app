import axios from "axios";

// export function fetchMsg() {
//   return function(dispatch) {
//     dispatch({type: "LOAD_MESSAGE"});
//     axios.get("http://localhost:3000/getMessages")
//       .then((response) => {
//         dispatch({type: "LOAD_MESSAGE_FULFILLED", payload: response.data})
//       })
//       .catch((err) => {
//         dispatch({type: "LOAD_MESSAGE_REJECTED", payload: err})
//       })
//   }
// }

// export function addMsg(data) {
//   return function(dispatch) {
//     socket.on('chat',(data) => {
//       dispatch({type: "LOAD_MESSAGE", payload:data});
//     })
//   }
// }


export function createChannel(data) {
    return function(dispatch) {
        dispatch({type: "CREATE_CHANNEL"});
        axios.post("http://localhost:3000/conversation/create", {
                conversationName: name,
                conversatioOwner: onwer,
                members: members,
                type: type
            })
            .then((response) => {
                dispatch({type: "CREATE_CHANNEL_FULFILLED", payload: response.data})
            })
            .catch((err) => {
                dispatch({type: "CREATE_CHANNEL_REJECTED", payload: err})
            })
    }
}

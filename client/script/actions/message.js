import axios from "axios";

export function fetchMsg() {
  return function(dispatch) {
    dispatch({type: "LOAD_MESSAGE"});
    axios.get("http://localhost:3000/getMessages")
      .then((response) => {
        dispatch({type: "LOAD_MESSAGE_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "LOAD_MESSAGE_REJECTED", payload: err})
      })
  }
}

// export function addMsg(data) {
//   return function(dispatch) {
//     socket.on('chat',(data) => {
//       dispatch({type: "LOAD_MESSAGE", payload:data});
//     })
//   }
// }


export function createMsg(data) {
  return {type: "CREATE_MESSAGE", payload:data}
}

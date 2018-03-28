const initState = {
  messages:[],
  fecting:false,
  fetched:false,
  error:null
}
export default function messages(state = initState, action) {
  switch (action.type) {
    case "LOAD_MESSAGE":
      return {...state, fetcing:true}

    case "LOAD_MESSAGE_FULFILLED":
      return {
        ...state,
        fetcing:false,
        fetched:true,
        messages:action.payload
      }

    case "LOAD_MESSAGE_REJECTED":
      return {
        ...state,
        fetcing:false,
        error:action.payload
      }

    case "CREATE_MESSAGE":
      return {...state, messages:[...state.messages, action.payload]}

    default:
      return state
  }
}

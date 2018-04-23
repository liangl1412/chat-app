const initState = {}
export default function users(state = initState, action) {
  switch (action.type) {
    case "CREATE_CHANNEL":
      return {...state, fetcing:true}

    case "CREATE_CHANNEL_FULFILLED":
      return {
        ...state,
        fetcing:false,
        fetched:true,
        messages:action.payload
      }

    case "CREATE_CHANNEL_REJECTED":
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

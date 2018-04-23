import { applyMiddleware, createStore } from "redux"

import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import rootReducer from "./reducers"

const middleware = applyMiddleware(promise(), thunk)
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, {user:window.__INITIAL_STATE__.user},middleware);
console.log(store.getState());
export default store;

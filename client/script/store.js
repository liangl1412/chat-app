import { applyMiddleware, createStore } from "redux"

import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import rootReducer from "./reducers"

const middleware = applyMiddleware(promise(), thunk)
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, {users:window.__INITIAL_STATE__.users},middleware);
console.log(store.getState());
export default store;

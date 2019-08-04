import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import currentUserReducer from './reducers/currentUserReducer'
import loginFormReducer from './reducers/loginFormReducer'
import userReducer from './reducers/userReducer'

const reducer = combineReducers({
  currentUserReducer,
  loginFormReducer,
  userReducer

})


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store

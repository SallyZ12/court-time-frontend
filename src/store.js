import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import signupFormReducer from './reducers/signupFormReducer'
import currentUserReducer from './reducers/currentUserReducer'
import loginFormReducer from './reducers/loginFormReducer'
import usersReducer from './reducers/usersReducer'
import clubsReducer from './reducers/clubsReducer'
import clubFormReducer from './reducers/clubFormReducer'
import courtFormReducer from './reducers/courtFormReducer'

const reducer = combineReducers({
  currentUserReducer,
  loginFormReducer,
  usersReducer,
  signupFormReducer,
  clubsReducer,
  clubFormReducer,
  courtFormReducer
})


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store

import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
//import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
import thunk from 'redux-thunk';



const store = createStore(
rootReducer, applyMiddleware(thunk, createLogger()))

export default store;





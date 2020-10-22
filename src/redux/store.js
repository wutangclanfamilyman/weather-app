import {createStore, compose} from 'redux'
import rootReducer from './reducers'

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__  || compose 

const store = createStore(rootReducer, reduxDevTools())

export default store
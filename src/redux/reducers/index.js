import {combineReducers} from 'redux'

import modal from './modal'
import weather from './weather'

export default combineReducers({
    modal,
    weather
})
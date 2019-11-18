import { combineReducers } from 'redux'
import info from './info/reducer'
import messages from './messages/reducer'

export default combineReducers({

    info,
    messages,
})
import {combineReducers} from 'redux'
import info from './redux/info/reducer'
import messages from './redux/messages/reducer'

export default combineReducers({
    info,
    messages,
})
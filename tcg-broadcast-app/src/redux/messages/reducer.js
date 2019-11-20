import {GET_MESSAGES} from './../../actionTypes'

const inititalState ={listOfMessages:[]}

export default function messagesReducer(state = inititalState ,action){
    switch(action.type){
        case GET_MESSAGES:{
            const newState={
                ...state,
                listOfMessages:[...action.payload]
            };
            return newState;
        }
        default:
            return state;
    }
}
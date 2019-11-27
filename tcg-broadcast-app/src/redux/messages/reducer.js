import {GET_MESSAGES} from './../../actionTypes'

const inititalState ={listOfMessages:[],
date: new Date()
}

export default function messagesReducer(state = inititalState ,action){
    switch(action.type){
        case GET_MESSAGES:{
            const date= new Date()
            const newState={
                ...state,
                listOfMessages:[...action.payload,{date:date}]
            };
            return newState;
        }
        default:
            return state;
    }
}
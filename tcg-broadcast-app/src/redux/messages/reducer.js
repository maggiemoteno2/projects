import {GET_MESSAGES,SAVE_MESSAGES} from './../../actionTypes'

const inititalState ={listOfMessages:[],
date: new Date()
}

export default function messagesReducer(state = inititalState ,action){
    switch(action.type){
        case SAVE_MESSAGES:{
            console.log("sdaf",JSON.parse(action.payload))
            const newState={
                ...state,listOfMessages:[...JSON.parse(action.payload)]
            };
            return newState;
        }
        default:
            return state;
    }
}
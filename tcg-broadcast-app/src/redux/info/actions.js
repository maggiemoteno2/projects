import {ADD_NAME} from '../../actionTypes'

export function addName(name){
    return{
        type: ADD_NAME,
        payload:name
    }
}
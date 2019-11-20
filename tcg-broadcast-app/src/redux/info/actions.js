import {ADD_NAMES} from './../../actionTypes'
export function addnames(name){
    return{
        type:ADD_NAMES,
        payload:{name}
    }
}
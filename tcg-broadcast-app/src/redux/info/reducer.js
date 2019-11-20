import {ADD_NAMES} from './../../actionTypes'
const inititalState={ 
    peopleNames:[
    {
        name:""
    }
],
};

export default function namesOfPeople(state=inititalState,action){
    switch(action.type){
        case ADD_NAMES:{const {name}=action.payload;
        if(state.peopleNames.length<=0){
            return{
                ...state,peopleNames:[
                    ...state.peopleNames,{
                        name:name
                    }
                ]
            }
        }
        return {
            ...state,peopleNames:[
                ...state.peopleNames,{
                    name:name
                }
            ]
        };
    }
    default:{
        return state;
    }
    }
}
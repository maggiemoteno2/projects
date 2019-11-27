import {ADD_NAMES} from './../../actionTypes'
const inititalState={ 

       userName:"",

};

export default function userName(state=inititalState,action){
    console.log("hello",state.userName)
    switch(action.type){
        case ADD_NAMES:{const {name}=action.payload;
        if(state.userName.length<=0){
            return{
                    
                       userName:name
                    
                
            }
        }
        return {
        
            
                   userName:name
                
            
        };
    }
    default:{
        return state;
    }
    }
}
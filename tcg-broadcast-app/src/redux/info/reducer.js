import {ADD_NAME} from '../../actionTypes'
const initialState={
    names:[{
        name:''
    }]
};
export default function names(state=initialState, action){
    switch(action.type){
        case ADD_NAME:{
            const{name}=action.payload;
            return {
                ...state,names:[
                    ...state.names,
                    {
                        name:name
                    }
                ]
            }
        }
        }
    }
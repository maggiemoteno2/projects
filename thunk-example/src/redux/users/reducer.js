const inititalState = { all: [ ],
date:[] }

export default function counter(state = inititalState, action) {
  
  switch (action.type) {
    case "ADD_USERS": {
      return { ...state, 
        date: new Date(),
        all: action.payload }
    }
    case "ADD_USER": {
      const newState = { ...state, all: [...state.all,{id: state.all[state.all.length-1].id +1 ,first_name: action.payload.first_name}] }
      return newState;
    }
    case "REMOVE_USER": {
  
      return { all: [...state.all.filter(user=>user["first_name"]!==action.payload.user)]}

      }
    default:
      return state
  }
}
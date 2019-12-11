import { SAVE_MESSAGES , GET_MESSAGES } from "./../../actionTypes";

import Axios from "axios";

// export const messageAdded =(message)=> {
//   console.log("hello", message.message)
//   return async dispatch => {
//     try{
//       await Axios.post(
//         "http://ac88a44a6935711e982b602f197ebe6f-1529281652.eu-west-2.elb.amazonaws.com/chat/person/",
//         message.message
//         );
//         // dispatch({ type: ADD_MESSAGES, payload: [...messages] });
//     }catch(e){
//         console.log(e);
//     }
//   };
// };

// export const saveMessages = (messages) => {
// return{
//   type: SAVE_MESSAGES,
//   payload: messages
// }
// };


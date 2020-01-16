import {SAVE_MESSAGES} from "../actionTypes";
    
const url =
  "ws://ac88a44a6935711e982b602f197ebe6f-1529281652.eu-west-2.elb.amazonaws.com/chat/";
var exampleSocket = new WebSocket(url);

export const saveMessage =()=> {
    return  dispatch => {
       

        exampleSocket.onmessage = function (event) {
            const messages = event.data
             dispatch({type:SAVE_MESSAGES , payload:  messages});
    }
 }
}

exampleSocket.onopen = function (event) {
    console.log("connected");
};

export const sendMessage =(text) =>  dispatch => {
            exampleSocket.send(JSON.stringify(text))        
            console.log("text t" , text)
    }

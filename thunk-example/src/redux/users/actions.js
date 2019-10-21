export function removeUser(user){
    return{
        type:"REMOVE_USER",
        payload: {user}
    }
}
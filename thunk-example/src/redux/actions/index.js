
export function removeComputer(id) {
    return {
        type: "REMOVE_COMPUTER",
        payload: {id}
    };
}
export function addComputer(name) {
    return {
        type: "ADD_COMPUTER",
        payload:  {name}
    }
}
export function editTitle(name,id) {
    return {
        type: "EDIT_TITLE",
        payload: {name,id}
    }
}

export function addBook(name, author,date) {
    return {
        type: "ADD_BOOK",
        payload: { name, author,date}
    }
}
export function removeBook(id){
    return{
        type:"REMOVE_BOOK",
        payload:{id}
    }
}
export function removeUser(user){
    return{
        type:"REMOVE_USER",
        payload: {user}
    }
}
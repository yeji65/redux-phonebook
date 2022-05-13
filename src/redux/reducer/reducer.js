
let initalState={
    contactList:[],
    
}

function reducer(state=initalState,action){
    const {type,payload} = action
    if(type == "add_Contact"){
        return {...state,contactList:[...state.contactList,{name:payload.name,phoneNumber:payload.phoneNumber}]}
    }
        return{...state}
}

export default reducer;
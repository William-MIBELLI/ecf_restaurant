import { USER_ACTION_TYPE } from "./user.type"

const defaultUser = {
    
}

export const UserReducer = (state = defaultUser, action) => {
    const { type, payload } = action
    switch(type){
        case USER_ACTION_TYPE.DISCONNECT_USER:
            console.log('on rentre dans le case')
            return{
                ...payload
            }
        default:
            return state
    }
}
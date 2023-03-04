import { USER_ACTION_TYPE } from "./user.type"

const defaultUser = {
    currentUser: {}
}

export const UserReducer = (state = defaultUser, action) => {
    const { type, payload } = action
    switch(type){
        case USER_ACTION_TYPE.DISCONNECT_USER:
            console.log('on rentre dans le case')
            return{
                ...state,
                currentUser: {}
            }
        case USER_ACTION_TYPE.CONNECT_USER:
            return{
                ...state,
                currentUser: {...payload}

            }
        case USER_ACTION_TYPE.UPDATE_CURRENT_USER:
            return{
                ...state,
                currentUser: {...payload}
            }
        default:
            return state
    }
}
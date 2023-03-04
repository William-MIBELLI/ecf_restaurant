import { createAction } from "../../Services/helper"
import { USER_ACTION_TYPE } from "./user.type"

export const disconnectUser = () => {
    console.log('on rentre dans disconnect')
    return createAction(USER_ACTION_TYPE.DISCONNECT_USER, {})
}

export const connectUser = (userToConnect) => {
    console.log('connectuser : ', userToConnect)
    return createAction(USER_ACTION_TYPE.CONNECT_USER, userToConnect)
}

export const updateCurrentUser = (userToUpdate) => {
    return createAction(USER_ACTION_TYPE.UPDATE_CURRENT_USER, userToUpdate)
}
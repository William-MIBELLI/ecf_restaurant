import { createAction } from "../../Services/helper"
import { USER_ACTION_TYPE } from "./user.type"

export const disconnectUser = () => {
    console.log('on rentre dans disconnect')
    return createAction(USER_ACTION_TYPE.DISCONNECT_USER, {})
}
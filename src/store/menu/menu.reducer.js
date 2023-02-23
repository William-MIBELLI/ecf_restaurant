import menu from '../../menu_array.json'
import { MENU_ACTION_TYPE } from './menu.type'

export const MenuReducer = (state = menu, action) => {

    const { type, payload } = action

    switch(type){
        case MENU_ACTION_TYPE.SET_MENU:
            return{
                ...payload
            }
        case MENU_ACTION_TYPE.UPDATE_EXISTING_MENU:
            return{
                ...state,
                ...payload
            }
        default:
            return state
    }
}
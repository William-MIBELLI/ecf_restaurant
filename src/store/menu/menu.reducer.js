import menu from '../../menu_array.json'
import { MENU_ACTION_TYPE } from './menu.type'

export const MenuReducer = (state = {menu: menu}, action) => {

    const { type, payload } = action

    switch(type){
        case MENU_ACTION_TYPE.ADD_NEW_MENU:
            return {
                menu: [...payload]
            }
        case MENU_ACTION_TYPE.UPDATE_EXISTING_MENU:
            return{
                menu: [...payload]
            }
        case MENU_ACTION_TYPE.REMOVE_MENU:
            return{
                menu: [...payload]
            }
        default:
            return state
    }
}
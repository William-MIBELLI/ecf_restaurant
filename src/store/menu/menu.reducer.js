import { MENU_ACTION_TYPE } from './menu.type'

const defaultMenu = {
    menu: [
        {
            id: '',
            name: '',
            description: '',
            price: '',
            availability: ''
        }
    ]
}

export const MenuReducer = (state = defaultMenu, action) => {

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
        case MENU_ACTION_TYPE.INITIALIZE_MENU:
            return{
                menu: [...payload]
            }
        default:
            return state
    }
}
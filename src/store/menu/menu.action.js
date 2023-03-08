import { createAction } from "../../Services/helper"
import { MENU_ACTION_TYPE } from "./menu.type"

export const addNewMenu = (state, menuToAdd) => {
    const newMenu = [...state, menuToAdd]
    return createAction(MENU_ACTION_TYPE.ADD_NEW_MENU, newMenu)
}

export const removeMenu = (state, menuToRemove) => {
    const newState = state.filter(menu => {
        return menu.id !== menuToRemove.id
    })

    return createAction(MENU_ACTION_TYPE.REMOVE_MENU, newState)
}

export const updateMenu = (state, menuToUpdate) => {
    const newState = state.map(menu => {
        return menu.id === menuToUpdate.id ? menuToUpdate : menu;
    })
    return createAction(MENU_ACTION_TYPE.UPDATE_EXISTING_MENU, newState)
}

export const initializeMenu = (menu) => {
    return createAction(MENU_ACTION_TYPE.INITIALIZE_MENU, menu)
}
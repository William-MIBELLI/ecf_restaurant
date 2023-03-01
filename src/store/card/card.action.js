import { createAction } from "../../Services/helper"
import { CARD_ACTION_TYPE } from "./card.type"

export const addNewPlate = (state, plateToAdd) => {
    const newState = [...state, plateToAdd]
    return createAction(CARD_ACTION_TYPE.ADD_NEW_PLATE, newState)
}

export const updatePlate = (state, plateToUpdate) => {
    const newState = state.map(plate => {
        return plate.id === plateToUpdate.id ? plateToUpdate : plate
    })

    return createAction(CARD_ACTION_TYPE.UPDATE_PLATE, newState)
}

export const removePlate = (state, plateToRemove) => {
    const newState = state.filter(plate => {
        return plate.id !== plateToRemove.id
    })

    return createAction(CARD_ACTION_TYPE.REMOVE_PLATE, newState)
}
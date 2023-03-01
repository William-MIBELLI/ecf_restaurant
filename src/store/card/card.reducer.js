import card_array from '../../card_array.json'
import { CARD_ACTION_TYPE } from './card.type'


export const CardReducer = (state = {card: card_array}, action) => {

    const { type, payload } = action

    switch(type){
        case CARD_ACTION_TYPE.ADD_NEW_PLATE:
            return {
                card: [...payload]
            }
        case CARD_ACTION_TYPE.UPDATE_PLATE:
            return {
                card: [...payload]
            }
        case CARD_ACTION_TYPE.REMOVE_PLATE:
            return {
                card: [...payload]
            }
        default:
            return state
    }
}